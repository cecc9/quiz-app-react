import { Stack, Text, Table, TableContainer, Button } from "@chakra-ui/react";
import { useQuestionStore } from "../../store/questions";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

type Props = {
    setAllResultsReady: React.Dispatch<React.SetStateAction<boolean>>;
};

const AllResults = ({ setAllResultsReady }: Props) => {
    const resultsOfQuestions = useQuestionStore(
        (state) => state.resultsOfQuestions
    );

    const resetQuesRandom = useQuestionStore((state) => state.resetQuesRandom);

    const handleReset = () => {
        resetQuesRandom();
        setAllResultsReady((prev) => !prev);
    };

    return (
        <Stack>
            <Text as='b' fontSize='2xl' color='whiteAlpha.900' p='4'>
                Todos tus resultados obtenidos:
            </Text>
            <TableContainer maxW='100%' overflowX='auto'>
                <Table
                    variant='unstyled'
                    size='sm'
                    style={{
                        borderCollapse: "separate",
                        borderSpacing: "5px",
                    }}
                >
                    <TableHead />
                    <TableBody resultsOfQuestions={resultsOfQuestions} />
                </Table>
            </TableContainer>
            <Stack align='center' p='5'>
                <Button w='250px' size='lg' onClick={handleReset}>
                    Reset
                </Button>
            </Stack>
        </Stack>
    );
};

export default AllResults;
