import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-4 text-muted-foreground">La página no fue encontrada</p>
        <div className="flex gap-4 justify-center">
          <Link to="/en" className="text-primary underline hover:text-primary/90">
            Go to English Home
          </Link>
          <Link to="/es" className="text-primary underline hover:text-primary/90">
            Ir a Inicio en Español
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
