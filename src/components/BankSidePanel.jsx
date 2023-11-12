
import './BankSidePanel.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BankSidePanel = () => {
    $(document).ready(function() {
        $('.sub-btn').click(function() {
            $(this).next('.sub-menu').slideToggle();
        });
    });

  return (
    <>
        <div className="sidebar">
            <div className="menu">
                  <div className="item"><a href='#'>My Accounts</a></div>
                  <div className="item"><a href=''>Bill Payments</a></div>
                  <div className="item"><a href=''>Transfer Funds</a></div>
                  <div className="item">
                    <a href='#' className="sub-btn">EcoCredit</a>
                    <div className="sub-menu">
                        <a href='#' class="sub-item">Dashboard</a>
                        <a href='#' class="sub-item">Achievements</a>
                        <a href='#' class="sub-item">Trends</a>
                        <a href='#' class="sub-item">Leaderboard</a>
                    </div>
                  </div>
            </div>
        </div>
    </>
  )
}
