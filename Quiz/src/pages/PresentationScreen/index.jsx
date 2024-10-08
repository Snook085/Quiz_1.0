
import video from '../../assets/quiz.mp4'


export default function PresentationScreen({setScreen}) {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <div className="absolute inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Bem-vindo ao Jogo!</h1>
          <p className="text-lg text-white mt-4">Prepare-se para aprender e se divertir.</p>
          <button onClick={() => setScreen(2)} className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Vamos Começar
          </button>
        </div>
      </div>
    );
  }
  