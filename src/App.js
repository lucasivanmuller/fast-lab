import { useEffect, useState } from 'react';
import { Col, Collapse, Layout, Row, Space, Tabs, Typography } from 'antd';

import { groupBy } from 'ramda';

import './App.css';

import studiesMock from './mock/estudios';

const { Panel } = Collapse;
const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
const { Text } = Typography;

function App() {
  const [studies, setStudies] = useState([]);
  useEffect(() => {
    const byClinicHistory = groupBy(({ HC }) => HC);
    setStudies(byClinicHistory(studiesMock));
  }, []);

  console.log('HERE', studies);

  return (
    <Layout>
      <Header>Fundacion Favaloro</Header>
      <Content>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Piso 1" key="1">
            <Collapse defaultActiveKey={[]}>
              {Object.keys(studies).map((key) => (
                <Panel header={`Estudio Clinico ${key}`} key={key}>
                  {studies[key].map(() => (
                    <Row gutter={[32]}>
                      <Col>
                        <Space direction="vertical">
                          <h1>06.46hs</h1>
                          <Text>Completo</Text>
                          <Text>Ver Informe</Text>
                        </Space>
                      </Col>
                      <Col>
                        <Space direction="vertical">
                          <h1>Hemograma</h1>
                          <Text type="success">Hto: 31%</Text>
                          <Text type="warning">Hb: 9.9 gr/dl</Text>
                          <Text type="warning">GB: 10.400/mm3</Text>
                          <Text type="danger">Plaq 381.000/mm3</Text>
                        </Space>
                      </Col>
                      <Col>
                        <Space direction="vertical">
                          <h1>Medio Interino</h1>
                          <Text>Sodio 135mEq/l</Text>
                          <Text>Potasio: 5.2mEq/l</Text>
                          <h1>Renal</h1>
                          <Text>Urea: 59mg/dl</Text>
                          <Text>Creat: 0.7mg/dl</Text>
                        </Space>
                      </Col>
                      <Col>
                        <Space direction="vertical">
                          <h1>Hepatograma</h1>
                          <Text>GOT: 21 U/l</Text>
                          <Text>GPT: 24 U/l</Text>
                          <Text>FAL: 130U/l</Text>
                          <Text>Bili Directa 0.2mg/dl</Text>
                          <Text>Bili Indirecta 0.1mg/dl</Text>
                          <Text>GGT: 175 U/l</Text>
                        </Space>
                      </Col>
                      <Col>
                        <Space direction="vertical">
                          <h1>Otros</h1>
                          <Text>Gluc: 122mg/dl</Text>
                        </Space>
                      </Col>
                    </Row>
                  ))}
                </Panel>
              ))}
            </Collapse>
          </TabPane>
          <TabPane tab="Piso 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Piso 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
