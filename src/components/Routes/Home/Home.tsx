import { Col, Row } from 'antd';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div>Select the Project</div>
      <Row gutter={[16, 16]}>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          col
        </Col>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          Col
        </Col>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          Col
        </Col>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          Col
        </Col>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          Col
        </Col>
        <Col
          style={{ width: '50%', marginBottom: 48, backgroundColor: 'blue' }}
          span={5}
          offset={1}>
          Col
        </Col>
      </Row>
    </>
  );
};

export default Home;
