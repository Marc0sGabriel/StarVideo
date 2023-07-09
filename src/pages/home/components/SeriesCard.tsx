import { Link } from 'react-router-dom';

export function SeriesCard() {
  return (
    <Link to={'/series/episode/operacao-strix'}>
      <img
        src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe"
        alt=""
        height={300}
        width={150}
      />
      <h2 className="font-bold text-xs sm:text-sm mt-2">SPY x FAMILY</h2>
      <span className="font-medium text-xs sm:text-sm text-zinc-500">
        Leg | Dub
      </span>
    </Link>
  );
}
