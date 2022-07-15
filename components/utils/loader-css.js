export default `
.loading {
    height: 100vh;
    width: 100vw;
    position: absolute;
    // background: var(--color-grey-light-1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    letter-spacing: 2px;
    background: #efd1c3;
    color: black;
    font-size: 1.3rem;
 }
 .loading-wrapper {
    height: 2px;
    width: 150px;
    background: #ededed;
    border-radius: 100px;
    opacity: 0;
 }
 .loading-progress {
    height: 2px;
    width: 150px;
    // background: #fff;
    border-radius: 100px;
    background-color: #585858;
 }
`;
