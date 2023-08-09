import "./styles.css";
// import Video from "./../assets/video_pizza_pitz (video-converter.com).mp4";

export default function Login() {
  return (
    <>
      {/* <video className="video-pizza" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video> */}
      <div className="container-data">
        <div className="info">
          <h1>Login</h1>
          <input
            className="input-data"
            type="text"
            placeholder="Qual seu Pitz name?"
          />
          <input
            className="input-data"
            type="text"
            placeholder="Há quantos anos você ama pizza? (sua idade)"
          />
          <input
            className="input-data"
            type="text"
            placeholder="Insira sua senha"
          />
          <input
            className="input-data"
            type="text"
            placeholder="Confirme sua senha"
          />
          <button className="button-login">
            <a href="">Vamos escolher uma pizza! 🍕</a>
          </button>
          <a className="return-home" href="">
            Retornar a Home 🍅
          </a>
        </div>
      </div>
    </>
  );
}
