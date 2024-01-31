import React from "react";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";
import map from "../../../../../assets/map2.png"

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx15 plpx15 ptpx20 border-d pbpx20 cust-scroll bg-33353f dashboard">
      <div className="grid-cols-4 gap-12">
        <div className="h-dash rounded-10 bg-glass2 flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">1000 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textwhite">
                Collection of Porfolio
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img src={map} alt="map" className="dash-social" />
          </div>
        </div>
        <div className="h-dash rounded-10 bg-glass2 flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">100 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textwhite">Enquiry Members</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img src={map} alt="map" className="dash-social" />
          </div>
        </div>
        <div className="h-dash rounded-10 bg-glass2 flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">12 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textwhite">Review of People</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img src={map} alt="map" className="dash-social" />
          </div>
        </div>
        <div className="h-dash rounded-10 bg-glass2 flex items-end relative">
          <div className="p15 flex justify-between items-center  w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">6</h2>
              <p className="fsize14 mtpx1 mbpx1 textwhite">Services</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img src={map} alt="map" className="dash-social" />
          </div>
        </div>
      </div>
      <div className="mtpx25 mbpx15 flex gap-12 items-center">
        <div className="w-60">
          <div className="relative">
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Search"
            />
            <div className="absolute top-0 right-0 mtpx9 mrpx2">
              <FeatherIcon
                icon="search"
                className="textgray cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="fsize13 textwhite w-20 font-300">
              <p>First Name</p>
            </th>
            <th className="fsize13 textwhite w-20 font-300">
              <p>Last Name</p>
            </th>
            <th className="fsize13 textwhite w-20 font-300">
              <p>Email</p>
            </th>
            <th className="fsize13 textwhite w-20 font-300">
              <p>Phone</p>
            </th>
            <th className="fsize13 textwhite w-20 font-300">
              <p>Message</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={4}
          pageRangeDisplayed={4}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
