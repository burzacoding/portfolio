export interface JobInterface {
  description: string;
  techs: (string)[];
  title: string;
  imgSource: string;
  gitLink: string;
  liveSiteLink?: string;
  position: "left" | "right";
}


export const PlatubiJob: JobInterface = {
  description:
    "Platubi es una calculadora online para visualizar el valor total de registros conformados por divisa/criptomoneda y monto.",
  techs: [
    "Firebase",
    "Typescript",
    "React",
    "CoinMarketCap API",
    "Zustand"
  ],
  title: "Platubi",
  imgSource: "/assets/PlatubiDashboard.png",
  gitLink: "https://github.com/burzacoding/platubi",
  liveSiteLink: "https://platubi.com",
  position: "right"
};

export const RESTJob: JobInterface = {
  description:
    "API REST totalmente funcional y con autorización basada en roles. Provee usuarios, categorias y productos.",
  techs: [
    "NodeJS",
    "Typescript",
    "Express",
    "MongoDB",
  ],
  title: "API REST",
  imgSource: "/assets/restapi.png",
  gitLink: "https://github.com/burzacoding/rest-server",
  position: "left"
}
