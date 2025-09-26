import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/globals.scss';
import { Provider } from "react-redux";
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/menu/dashboard.tsx';
import ManageUser from './Component/menu/manage.user.tsx';
import ManageCompany from './Component/menu/manage.company.tsx';
import AdminLayout from './Screen/AdminPage.tsx';
import PageUser from './Screen/UserPage.tsx';
import ViewListRegistered from './Component/user/view.list.registered.tsx';
import ResgisterUserPage from './Component/user/register.user.tsx';
import UpdateInfor from './Component/user/update.infor.user.tsx';
import FormLogin from './Component/auth/form.login.tsx';
import ManageLoginPage from './Component/auth/manage.login.page.tsx';
import ManagerJob from './Component/menu/manager.job.tsx';
import PageManager from './Screen/ManagerPage.tsx';
import AddJobForCompany from './Component/manager/addJobForCompany.tsx';
import UpdateInforManager from './Component/manager/update.infor.tsx';
import ViewListApply from './Component/manager/view.list.apply.tsx';
import TableJobCreated from './Component/manager/table.job.created.tsx';
import ViewInforYourSelf from './Component/manager/view.infor.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <App /> */}
        <BrowserRouter>
          <Routes>

            <Route path="/login" element={<ManageLoginPage />}>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard></Dashboard>}></Route>
              <Route path='user' element={<ManageUser></ManageUser>}></Route>
              <Route path='company' element={<ManageCompany></ManageCompany>}></Route>
              <Route path='job' element={<ManagerJob></ManagerJob>}></Route>
            </Route>

            <Route path="/" element={<PageUser />}>
              <Route index element={<ResgisterUserPage></ResgisterUserPage>}></Route>
              <Route path='update-profile' element={<UpdateInfor></UpdateInfor>}></Route>
              <Route path='view-list-registerd' element={<ViewListRegistered></ViewListRegistered>}></Route>
            </Route>

            <Route path="/manager" element={<PageManager />}>
              <Route index element={<AddJobForCompany></AddJobForCompany>}></Route>
              <Route path='update-inf' element={<UpdateInforManager></UpdateInforManager>}></Route>
              <Route path='view-list-apply' element={<ViewListApply></ViewListApply>}></Route>
              <Route path='table-job-created' element={<TableJobCreated></TableJobCreated>}></Route>
              <Route path='view-infor-your-self' element={<ViewInforYourSelf></ViewInforYourSelf>}></Route>
            </Route>

          </Routes>
        </BrowserRouter>


      </PersistGate>

    </Provider>

  </React.StrictMode>
);