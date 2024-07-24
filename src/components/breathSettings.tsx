import {useState} from "react";
import {Box, Button, Card, OutlinedInput, Slider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const BreathSettings = () => {
    const [inhales, setInhales] = useState<number>(0)
    const [velocity, setVelocity] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [rounds, setRounds] = useState<number>(0)

    const handleChangeDuration = (event: Event) => {
        event.preventDefault()
        const target = event.target as HTMLInputElement
        setDuration(Number(target.value))
    }

    const renderInhales = () => {
        return (
            <Box
                width={700}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
            >
                <h3>Amount of inhales</h3>
                <Button onClick={() => setInhales(value => value === 0 ? 0 : value - 1)}><RemoveIcon/></Button>
                <OutlinedInput value={inhales} readOnly
                               sx={{maxWidth: `${inhales < 10 ? '40px' : '50px'}`, maxHeight: '40px'}}/>
                <Button onClick={() => setInhales(value => value === 99 ? value : value + 1)}><AddIcon/></Button>
            </Box>
        )
    }

    const renderRounds = () => {
        return (
            <Box
                width={700}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
            >
                <h3>Amount of rounds</h3>
                <Button onClick={() => setRounds(value => value === 0 ? 0 : value - 1)}><RemoveIcon/></Button>
                <OutlinedInput value={rounds} readOnly
                               sx={{maxWidth: `${rounds < 10 ? '40px' : '50px'}`, maxHeight: '40px'}}/>
                <Button onClick={() => setRounds(value => value === 99 ? value : value + 1)}><AddIcon/></Button>
            </Box>
        )
    }

    const renderDuration = () => {
        return (
            <Box
                width={700}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
            >
                <h3>Duration</h3>
                <Box width={300}>
                    <Slider max={30} value={duration} onChange={(e) => handleChangeDuration(e)} defaultValue={0}
                            aria-label="Default" valueLabelDisplay="auto"/>
                </Box>
            </Box>
        )
    }


    return (
        <Card sx={{paddingLeft: '50px'}}>
            {renderInhales()}
            {renderRounds()}
            {renderDuration()}
        </Card>

    )

}