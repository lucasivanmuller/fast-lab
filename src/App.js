import { useEffect, useState } from 'react';
import { Col, Collapse, Layout, Row, Space, Tabs, Typography } from 'antd';

import './App.css';

const { Panel } = Collapse;
const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
const { Text } = Typography;

function App() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch('http://localhost/labchart/labchart.php?piso=6')
      .then((response) => response.json())
      .then(setPatients);
  }, []);

  return (
    <Layout>
      <Header>Fundacion Favaloro</Header>
      <Content>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Piso 1" key="1">
            <Collapse defaultActiveKey={[]}>
              {patients.map(({ HC, Nombre = '', ...rest }) => (
                <Panel
                  key={JSON.stringify(rest)}
                  header={`${rest['Cama']} - HC:${HC} - ${Nombre}`}
                >
                  <Row gutter={[32]}>
                    {Object.keys(rest).map((title) => {
                      if (title.toLocaleLowerCase() === 'cama') return null;
                      if (title.toLowerCase() === 'orden') {
                        return (
                          <Col>
                            <Space direction="vertical">
                              <h1 style={{ textTransform: 'capitalize' }}>
                                {title}
                              </h1>
                              <Text>{rest[title]}</Text>
                            </Space>
                          </Col>
                        );
                      }

                      return (
                        <Col>
                          <Space direction="vertical">
                            <h1>{title}</h1>
                            {Object.keys(rest[title]).map((prop) => (
                              <Text>
                                {`${rest[title][prop].nombre_estudio}: ${rest[title][prop].resultado} ${rest[title][prop].unidades}`}
                              </Text>
                            ))}
                          </Space>
                        </Col>
                      );
                    })}
                  </Row>
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
