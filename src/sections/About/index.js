import React from 'react';
import { Icon } from 'antd';
import './style.css';

const About = () => {
  return (
    <div className="about">
      <div className="about_title">
        <div className="about_allTitle">
          <span className="about_mainTitle">Lorem ipsum dolor sit.</span>
          <span className="about_subTitle">Why Choose Us</span>
        </div>
        <p className="about_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
          amet, laborum qui nulla quae alias tempora. Placeat voluptatem eum
          numquam quas distinctio obcaecati quaerat, repudiandae qui! Quia,
          omnis, doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quod libero amet, laborum qui nulla quae alias tempora.
        </p>
        <div className="about_icons">
          <div className="about_iconsContent">
            <Icon type="book" style={{ fontSize: '35px', color: '#FA6742' }} />
            <span className="detailed_icon">10</span>
            <span className="detailed_contentIcon">Years of experience</span>
          </div>
          <div className="about_iconsContent">
            <Icon type="like" style={{ fontSize: '35px', color: '#FA6742' }} />
            <span className="detailed_icon">20</span>
            <span className="detailed_contentIcon">Happy Customers</span>
          </div>
          <div className="about_iconsContent">
            <Icon type="user" style={{ fontSize: '35px', color: '#FA6742' }} />
            <span className="detailed_icon">10</span>
            <span className="detailed_contentIcon">Real estate Agent</span>
          </div>
        </div>
      </div>
      <div className="about_cards">
        <div className="about_card">
          <div className="about_service">
            <Icon
              type="cloud-server"
              style={{ fontSize: '35px', color: 'white' }}
            />
            <p className="service_title">Personalized Service.</p>
            <p className="service_detail">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              aliquid cumque
            </p>
          </div>
          <div className="about_support">
            <Icon type="setting" style={{ fontSize: '35px', color: 'gray' }} />
            <p className="support_title">24/7 support.</p>
            <p className="support_detail">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              aliquid cumque.
            </p>
          </div>
        </div>

        <div className="about_card">
          <div className="about_finance">
            <Icon type="dollar" style={{ fontSize: '35px', color: 'gray' }} />
            <p className="support_title">Financing made easy.</p>
            <p className="support_detail">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              aliquid cumque.
            </p>
          </div>
          <div className="about_client">
            <Icon type="heart" style={{ fontSize: '35px', color: 'white' }} />
            <p className="service_title">Trusted by thousands.</p>
            <p className="service_detail">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              aliquid cumque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
