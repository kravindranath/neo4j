import axios from "axios";

const EMPTY_OBJ = {};
const heading = "Test app";

function HomePage(_props) {
  const props = _props || EMPTY_OBJ;

  return <div>test app</div>;
}
export async function getServerSideProps(context) {
  const { query, req, res } = { ...context };

  return {
    props: { data: {} },
  };
}

export default HomePage;
