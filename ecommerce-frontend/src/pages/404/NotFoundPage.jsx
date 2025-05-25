import { Header } from "../../components/Header";
import './NotFoundPage.css';

export function Notfound({ cart }) {
  return (
    <>
      <Header cart={cart}/>
      <title>404 - Not Found</title>
      <link rel="icon" type="image/svg+xml" href="/404.png" />

      <div className="not-found-message">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
      </div>
    </>
  );
}
