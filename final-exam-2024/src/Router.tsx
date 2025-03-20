import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Exam from './routes/Exam';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="exam" element={<Exam />} />
    </>
  )
);

export default router;
