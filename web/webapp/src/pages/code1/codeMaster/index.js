import React, {useState} from "react"
import {Col, Row} from 'reactstrap';
import CodeBox from './component/CodeBox';

const Index = () => {


  return (
      <>
        <br/><br/>
        <Row>
          <Col lg={3}>
            <CodeBox data = {dummyData} />
          </Col>
          <Col lg={3}>
            1
          </Col>
          <Col lg={3}>
            1
          </Col>
          <Col lg={3}>
           1
          </Col>
        </Row>
      </>

  )
}

export default Index;

const dummyData = [
  {"idx":1,"companyCls":"code1","companyName":"회사명1","companyCode":"companyCode1","partnerCode":"partnerCode1","businessNumber":"709-18-88080","ceoname":"ceoname1","contactNum":"010-9009-1080","address":"address1","managerName":"managerName1","managerPhone":"010-9009-1080","managerEmail":"sample1@sample.com","startDate":"2021-04-21","endDate":"2021-04-21","useYN":"yes","realAddress":"realAddress1"},
  {"idx":2,"companyCls":"code2","companyName":"회사명2","companyCode":"companyCode2","partnerCode":"partnerCode2","businessNumber":"709-18-88081","ceoname":"ceoname2","contactNum":"010-9009-1081","address":"address2","managerName":"managerName2","managerPhone":"010-9009-1081","managerEmail":"sample2@sample.com","startDate":"2021-04-21","endDate":"2021-05-21","useYN":"yes","realAddress":"realAddress2"},
  {"idx":3,"companyCls":"code2","companyName":"회사명3","companyCode":"companyCode3","partnerCode":"partnerCode3","businessNumber":"709-18-88082","ceoname":"ceoname3","contactNum":"010-9009-1082","address":"address3","managerName":"managerName3","managerPhone":"010-9009-1082","managerEmail":"sample3@sample.com","startDate":"2021-04-21","endDate":"2021-06-20","useYN":"yes","realAddress":"realAddress3"},
  {"idx":4,"companyCls":"code3","companyName":"회사명4","companyCode":"companyCode4","partnerCode":"partnerCode4","businessNumber":"709-18-88083","ceoname":"ceoname4","contactNum":"010-9009-1083","address":"address4","managerName":"managerName4","managerPhone":"010-9009-1083","managerEmail":"sample4@sample.com","startDate":"2021-04-21","endDate":"2021-07-20","useYN":"no","realAddress":"realAddress4"},
  {"idx":5,"companyCls":"code1","companyName":"회사명5","companyCode":"companyCode5","partnerCode":"partnerCode5","businessNumber":"709-18-88084","ceoname":"ceoname5","contactNum":"010-9009-1084","address":"address5","managerName":"managerName5","managerPhone":"010-9009-1084","managerEmail":"sample5@sample.com","startDate":"2021-04-21","endDate":"2021-08-19","useYN":"yes","realAddress":"realAddress5"},
  {"idx":6,"companyCls":"code2","companyName":"회사명6","companyCode":"companyCode6","partnerCode":"partnerCode6","businessNumber":"709-18-88085","ceoname":"ceoname6","contactNum":"010-9009-1085","address":"address6","managerName":"managerName6","managerPhone":"010-9009-1085","managerEmail":"sample6@sample.com","startDate":"2021-04-21","endDate":"2021-09-18","useYN":"no","realAddress":"realAddress6"},
  {"idx":7,"companyCls":"code2","companyName":"회사명7","companyCode":"companyCode7","partnerCode":"partnerCode7","businessNumber":"709-18-88086","ceoname":"ceoname7","contactNum":"010-9009-1086","address":"address7","managerName":"managerName7","managerPhone":"010-9009-1086","managerEmail":"sample7@sample.com","startDate":"2021-04-21","endDate":"2021-10-18","useYN":"yes","realAddress":"realAddress7"},
  {"idx":8,"companyCls":"code3","companyName":"회사명8","companyCode":"companyCode8","partnerCode":"partnerCode8","businessNumber":"709-18-88087","ceoname":"ceoname8","contactNum":"010-9009-1087","address":"address8","managerName":"managerName8","managerPhone":"010-9009-1087","managerEmail":"sample8@sample.com","startDate":"2021-04-21","endDate":"2021-11-17","useYN":"no","realAddress":"realAddress8"},
  {"idx":9,"companyCls":"code1","companyName":"회사명9","companyCode":"companyCode9","partnerCode":"partnerCode9","businessNumber":"709-18-88088","ceoname":"ceoname9","contactNum":"010-9009-1088","address":"address9","managerName":"managerName9","managerPhone":"010-9009-1088","managerEmail":"sample9@sample.com","startDate":"2021-04-21","endDate":"2021-12-17","useYN":"yes","realAddress":"realAddress9"},
  {"idx":10,"companyCls":"code2","companyName":"회사명10","companyCode":"companyCode10","partnerCode":"partnerCode10","businessNumber":"709-18-88089","ceoname":"ceoname10","contactNum":"010-9009-1089","address":"address10","managerName":"managerName10","managerPhone":"010-9009-1089","managerEmail":"sample10@sample.com","startDate":"2021-04-21","endDate":"2022-01-16","useYN":"no","realAddress":"realAddress10"},
  {"idx":11,"companyCls":"code2","companyName":"회사명11","companyCode":"companyCode11","partnerCode":"partnerCode11","businessNumber":"709-18-88090","ceoname":"ceoname11","contactNum":"010-9009-1090","address":"address11","managerName":"managerName11","managerPhone":"010-9009-1090","managerEmail":"sample11@sample.com","startDate":"2021-04-21","endDate":"2022-02-15","useYN":"yes","realAddress":"realAddress11"},
  {"idx":12,"companyCls":"code3","companyName":"회사명12","companyCode":"companyCode12","partnerCode":"partnerCode12","businessNumber":"709-18-88091","ceoname":"ceoname12","contactNum":"010-9009-1091","address":"address12","managerName":"managerName12","managerPhone":"010-9009-1091","managerEmail":"sample12@sample.com","startDate":"2021-04-21","endDate":"2022-03-17","useYN":"no","realAddress":"realAddress12"},
  {"idx":13,"companyCls":"code1","companyName":"회사명13","companyCode":"companyCode13","partnerCode":"partnerCode13","businessNumber":"709-18-88092","ceoname":"ceoname13","contactNum":"010-9009-1092","address":"address13","managerName":"managerName13","managerPhone":"010-9009-1092","managerEmail":"sample13@sample.com","startDate":"2021-04-21","endDate":"2022-04-16","useYN":"yes","realAddress":"realAddress13"},
  {"idx":14,"companyCls":"code2","companyName":"회사명14","companyCode":"companyCode14","partnerCode":"partnerCode14","businessNumber":"709-18-88093","ceoname":"ceoname14","contactNum":"010-9009-1093","address":"address14","managerName":"managerName14","managerPhone":"010-9009-1093","managerEmail":"sample14@sample.com","startDate":"2021-04-21","endDate":"2022-05-16","useYN":"no","realAddress":"realAddress14"},
  {"idx":15,"companyCls":"code2","companyName":"회사명15","companyCode":"companyCode15","partnerCode":"partnerCode15","businessNumber":"709-18-88094","ceoname":"ceoname15","contactNum":"010-9009-1094","address":"address15","managerName":"managerName15","managerPhone":"010-9009-1094","managerEmail":"sample15@sample.com","startDate":"2021-04-21","endDate":"2022-06-15","useYN":"yes","realAddress":"realAddress15"},
  {"idx":16,"companyCls":"code3","companyName":"회사명16","companyCode":"companyCode16","partnerCode":"partnerCode16","businessNumber":"709-18-88095","ceoname":"ceoname16","contactNum":"010-9009-1095","address":"address16","managerName":"managerName16","managerPhone":"010-9009-1095","managerEmail":"sample16@sample.com","startDate":"2021-04-21","endDate":"2022-07-15","useYN":"yes","realAddress":"realAddress16"}
]