import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Divider from './components/Divider/Divider';
import Pic1 from './Images/Bild1.png';
import Pic2 from './Images/Bild2.png';
import Bubble from './Images/Bubble.svg';
import Datafetching from './components/DataFetching';



function App() {
  return (
    <div className = {styles.containerBig}>
      <div className = {styles.containerS}>
        <Navbar/>
        <Divider/>
        <h1 className={styles.header}>Upptäck glädjen i matematik</h1>
          <h2 className={styles.underHeader}>"Lär, lek och vinn"</h2>
        <div className= {styles.images}>
          <img className={styles.img}  src={Pic1} />
          <p className={styles.text}>
            Kunskapsvarvet är en plattform som syftar till att 
            göra matematik mer interaktivt och roligt för elever 
            genom att ge dem möjlighet att tävla mot varandra. Genom att delta i olika matematiska 
            utmaningar och tävlingar kan eleverna utveckla sina kunskaper och färdigheter i ämnet på ett 
            kul och engagerande sätt. Plattformen är utformad för elever i olika åldrar och nivåer, 
            så det finns utmaningar och tävlingar som passar alla. Målet är att göra matematik mer 
            tillgängligt och attraktivt för eleverna och att hjälpa dem 
            att utveckla en positiv inställning till ämnet.
          </p>
          <img className={styles.img}  src={Pic2}/>
        </div>













      </div>
    </div>

  );
}

export default App;
