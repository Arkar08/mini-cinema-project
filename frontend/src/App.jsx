import BookingContextProvider from "./context/BookingContext";
import CinemaContextProvider from "./context/CinemaContext";
import LoginContextProvider from "./context/LoginContext";
import MovieContextProvider from "./context/MovieContext";
import PriceContextProvider from "./context/PriceContext";
import RoomContextProvider from "./context/RoomContext";
import SeatContextProvider from "./context/SeatContext";
import Role from "./layouts/Role";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <ThemeProvider>
      <LoginContextProvider>
        <CinemaContextProvider>
          <RoomContextProvider>
            <SeatContextProvider>
              <PriceContextProvider>
                <BookingContextProvider>
                  <MovieContextProvider>
                    <Role />
                  </MovieContextProvider>
                </BookingContextProvider>
              </PriceContextProvider>
            </SeatContextProvider>
          </RoomContextProvider>
        </CinemaContextProvider>
      </LoginContextProvider>
    </ThemeProvider>
  );
};

export default App;
