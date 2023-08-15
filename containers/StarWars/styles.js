import styled from "styled-components";

const LandingPageWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  .page-heading {
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }

  .row-container {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
  }

  .col-container {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    font-size: 14px;
    box-sizing: border-box;
    position: relative;
    min-height: 1px;
  }

  .card-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    list-style: none;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    width: 100%;
    margin-bottom: 15px;
  }

  .card-body {
    padding: 20px;
    border-radius: 0 0 8px 8px;
  }

  .meta-container {
    margin: -4px 0;
    display: flex;
  }

  .meta-avatar {
    padding-inline-end: 16px;
  }

  .meta-detail {
    overflow: hidden;
    flex: 1;
  }

  .meta-title {
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .meta-description {
    color: rgba(0, 0, 0, 0.45);
    margin-top: 5px;
  }

  .image-content {
    height: 30px;
    width: 30px;
  }

  .badge {
    position: relative;
    left: 6px;
    top: -3px;
  }

  .search-wrapper {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .search-input {
    width: 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");
    background-color: hsl(0, 0%, 100%);
    background-size: 16px 16px;
    background-position: left 10px center;
    background-repeat: no-repeat;
    padding: 1.4em 2em;
    padding-left: 2.7em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: hsl(0, 0%, 52%);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    }

    &:focus-visible {
      outline: none;
    }
  }

  .loader {
    margin: 0 auto;
    font-style: italic;
  }
`;

export default LandingPageWrapper;
