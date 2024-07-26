import styled from 'styled-components';
import { Table } from "../components/Table";
import { Navbar } from "../components/Navbar";

const Header = styled.h1`
  margin-left: 1rem;
`;

const Catalogue = () => {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Header>LLM's</Header>
          <Table />
        </div>
      </main>
    </>
  );
}

export default Catalogue;