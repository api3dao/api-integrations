import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const TableView = ({ headers, parameters }) => {
  const getHeaders = () => {
    const titles = [];
    headers.map((title, index) => {
      return titles.push(<Th key={index}>{title.value}</Th>);
    });
    return titles;
  };

  const getRows = () => {
    const rows = [];
    if (parameters === undefined || parameters === null) return rows;
    let index = 0;
    parameters.map((parameter) => {
      index = index + 1;
      return rows.push(
        <Tr key={index}>
          {headers.map((title) => {
            index = index + 1;
            return <Td key={index}>{parameter[title.key]}</Td>;
          })}
        </Tr>
      );
    });
    return rows;
  };

  return (
    <TableContainer>
      <Table variant="striped" size={'sm'}>
        <Thead>
          <Tr>{getHeaders()}</Tr>
        </Thead>
        <Tbody>{getRows()}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
