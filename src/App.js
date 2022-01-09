
import './App.css';

function App() {
  return (
    <body>
      <nav class="flex w-full h-40 bg-sky-700 items-center justify-center z-10 ">
        <div class=" flex justify-center items-center">
          <p class="text-white w-52 h-10 bg-gray-500 flex justify-center items-center rounded-full border-2 border-zinc-900 mr-2">GET FREE MINECRAFT</p>
          <p class="text-white w-52 h-10 bg-gray-500 flex justify-center items-center rounded-full border-2 border-zinc-900 ml-2 mr-2">ONLY ON OUR SITE</p>
          <p class="text-white w-52 h-10 bg-gray-500 flex justify-center items-center rounded-full border-2 border-zinc-900 ml-2"> LEGIT</p>
        </div>
      </nav>
      <main>
        <section class="w-full h-96 bg-lime-800 flex flex-col items-center justify-center">
          <p class="text-black font-black mb-24 text-5xl">DONT WANT TO PAY FOR MINECRAFT?</p>
          <button class="text-white text-4xl bg-emerald-500 w-72 h-16 rounded-full hover:bg-neutral-600">DOWNLOAD</button>
          <p class="text-lime-700 mt-24">Definitly not a virus.</p>
        </section>
        <section class="w-full h-96 bg-sky-700 flex flex-col items-center justify-center">
          <p class="text-black font-medium mb-24 text-5xl">DONATION</p>
          <button class="text-white font-black text-4xl w-72 h-16 bg-violet-500 rounded-full hover:bg-sky-400">SEND 999€</button>
        </section>
        <section class="w-full h-96 bg-emerald-800 flex flex-col items-center justify-start">
          <h1 class="text-black font-medium mt-12 text-5xl mb-16">Recomendions from users!</h1>
          <div class="flex flex-row font-medium text-2xl">
            <div class="mr-8">
              <p>User415: Thank you for free minecraft </p>
              <p>Jenik: Awesome! </p>
              <p>XXplayerXX: Easy minecraft! </p>
            </div>
            <div class="ml-8">
              <p>Franta: Thank you for free minecraft </p>
              <p>Leonard: Awesome! </p>
              <p>Xetrener: Easy minecraft! </p>
            </div>
          </div>
        </section>
        <footer class="flex items-center justify-center h-12 w-full bg-cyan-700">
          <p>@ANONYMOUS</p>
        </footer>


      </main>




    </body>
  );
}

export default App;
