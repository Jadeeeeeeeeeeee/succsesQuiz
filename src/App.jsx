import MainConnector from "./mainQconnector";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/movies",
    element: (
      <Suspense fallback={<Loading />}>
        <Movies />
      </Suspense>
    ),
  },
  {
    path: "/series",
    element: (
      <Suspense fallback={<Loading />}>
        <Series />
      </Suspense>
    ),
  },
  {
    path: "/anime",
    element: (
      <Suspense fallback={<Loading />}>
        <Anime />
      </Suspense>
    ),
  },
  {
    path: "/kids",
    element: (
      <Suspense fallback={<Loading />}>
        <Kids />
      </Suspense>
    ),
  },
  {
    path: "/collection",
    element: (
      <Suspense fallback={<Loading />}>
        <Collection />
      </Suspense>
    ),
  },
  {
    path: "/search/:type/:query",
    element: (
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    ),
  },
  {
    path: "/:type/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/stream/:type/:id/season?/:season?/episode?/:episode?",
    element: (
      <Suspense fallback={<Loading />}>
        <Stream />
      </Suspense>
    ),
  },
]);

function App() {

  return(<>
  <RouterProvider router={router}/>
  <MainConnector/>
  </>);
}

export default App
