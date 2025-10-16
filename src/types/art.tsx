// Tipo para parametros do Objeto arte
export interface ArtPiece {
  slug: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  price: number;
  artist: string;
  width: number;
  height: number;
  technique: string;
  year: number;
}

// Tipo para os parâmetros da rota
export interface ArtParams {
  slug: string;
}