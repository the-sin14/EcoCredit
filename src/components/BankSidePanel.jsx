
import './BankSidePanel.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BankSidePanel = () => {
  return (
    <>
        <div className="sidebar">
            <div className="menu">
                  <div className="item"><a href='#'>My Accounts</a></div>
                  <div className="item"><a href=''>Bill Payments</a></div>
                  <div className="item"><a href=''>Transfer Funds</a></div>
                  <div className="item">
                    <a href='#' class="sub-btn">EcoCredit</a>
                    <div className="sub-menu">
                        <a href='#' class="sub-item">Dashboard</a>
                        <a href='#' class="subitem">Achievements</a>
                        <a href='#' class="subitem">Trends</a>
                        <a href='#' class="subitem">Leaderboard</a>
                    </div>
                  </div>
            </div>
        </div>
    </>
  )
}
