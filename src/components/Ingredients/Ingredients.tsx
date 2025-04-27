import { NumberInput, Table, Tbody, Th, Tr } from '@chakra-ui/icons';
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputField,
    NumberInputStepper,
    TableContainer,
    Td,
    Text,
    Thead,
} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
    ingredients: { title: string; count: string; measureUnit: string }[];
    portions: number;
};
export const Ingredients = ({ ingredients, portions }: Props) => {
    const [portionsCount, setPortionsCount] = useState<number>(portions);

    return (
        <TableContainer
            my={{ base: 6, lg: 10 }}
            sx={{
                'th, td': {
                    py: { base: 2.5, lg: 4 },
                    px: { base: 2, md: 6 },
                },
            }}
        >
            <Table>
                <Thead>
                    <Tr>
                        <Th color='lime.600' textTransform='uppercase'>
                            ИНГРЕДИЕНТЫ
                        </Th>
                        <Th
                            isNumeric
                            display='flex'
                            justifyContent='flex-end'
                            alignItems='center'
                            pr={0}
                        >
                            <Text
                                color='lime.600'
                                textTransform='uppercase'
                                mr={{ base: 3, md: 4 }}
                            >
                                ПОРЦИЙ
                            </Text>
                            <NumberInput
                                size='md'
                                value={portionsCount}
                                onChange={(valueAsString) =>
                                    setPortionsCount(Number(valueAsString))
                                }
                                min={1}
                                w={{ base: '73px', md: '90px' }}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper data-test-id='increment-stepper' />
                                    <NumberDecrementStepper data-test-id='decrement-stepper' />
                                </NumberInputStepper>
                            </NumberInput>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ingredients.map((i, index) => {
                        const ingredientCount = (Number(i.count) / portions) * portionsCount;

                        return (
                            <Tr key={index} bg={index % 2 === 0 ? 'blackAlpha.100' : 'white'}>
                                <Td>{i.title}</Td>
                                <Td isNumeric data-test-id={`ingredient-quantity-${index}`}>
                                    {i.measureUnit !== 'по вкусу'
                                        ? `${ingredientCount} ${i.measureUnit}`
                                        : i.measureUnit}
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
