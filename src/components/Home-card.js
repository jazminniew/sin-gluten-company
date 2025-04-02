import React from 'react';
import styled from 'styled-components';

const Card = ({ title, iconSrc, description, buttonText, link }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {iconSrc ? (
          <img src={iconSrc} alt={title} className="card-icon" />
        ) : (
          <ion-icon name="alert-circle-outline" className="card-icon"></ion-icon>
        )}
        <div className="card-details">
          <p className="text-title">{title}</p>
          {description && <p className="text-body">{description}</p>}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="card-button">{buttonText}</button>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 360px;
    height: 254px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  /* Si se usa imagen, se le da tamaño aquí */
  .card-icon {
    display: block;
    margin: 0 auto;
    position: relative;
    top: 40px;
    width: 60px;   /* Ajusta el tamaño según necesites */
    height: 60px;
    object-fit: contain;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #00a8b5;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: rgb(134, 134, 134);
  }

  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .card:hover {
    border-color: #00a8b5;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export default Card;
