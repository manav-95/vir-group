import React, { useState } from 'react';

import directors from '../../data/DirectorsData'
import managerials from '../../data/KeyManagerialsData'
import boardCommittees from '../../data/BoardCommitteesData'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdOutlineClose } from "react-icons/md";

const CorporateGovernanceContent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [boardCommitteActiveButton, setBoardCommitteActiveButton] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setSelectedItem(null);
    setIsOpen(false);
  }

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }


  const buttons = [
    { id: 'Board Of Directors', title: 'Board Of Directors' },
    { id: 'Key Managerial Personnel', title: 'Key Managerial Personnel' },
    { id: 'Board Committees', title: 'Board Committees' },
    { id: 'Codes & Policies', title: 'Codes & Policies' },
  ];

  const boardCommittessButtons = [
    { id: '1', title: 'Audit Committee' },
    { id: '2', title: 'Nomination and Remuneration Committee' },
    { id: '3', title: `Stakeholder's Relationship Committee` },
    { id: '4', title: 'Corporate Social Responsibility Committee' },
    { id: '5', title: 'Committee of Independent Directors' },
  ]

  return (
    <div className="max-w-7xl container mx-auto">
      {/* BUTTONS */}
      <div className="flex flex-col justify-start items-center space-y-4 py-12">
        {buttons.map((button) => (
          <div key={button.id} className="w-full">

            {/* BUTTON */}
            <button
              onClick={() => setActiveButton(activeButton === button.id ? null : button.id)} // Toggle content
              className="w-full flex justify-between items-center text-left border-l-6 border-[#4169e1] py-3 px-3 sm:p-4 md:px-6 md:py-4 bg-white cursor-pointer"
            >
              <h1 className="text-lg min-[425px]:text-lg  font-medium uppercase">{button.title}</h1>
              {activeButton === button.id ? (
                <FaMinus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
              ) : (
                <FaPlus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
              )}
            </button>

            {/* BUTTON CONTENTS */}
            <div
              className={`overflow-hidden transition-all duration-150 ${activeButton === button.id ? 'h-full opacity-100 py-4' : 'max-h-0 opacity-0'
                } mt-4`}
            >
              <div className="px-4">

                {/* BOARD OF DIRECTORS CONTENT */}
                {button.id === 'Board Of Directors' && (
                  <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
                      {directors.map((director) =>
                        <div
                          key={director.id}
                          className='flex flex-col justify-center items-center sm:items-start sm:text-left lg:items-start xl:items-center py-4 lg:py-8 lg:px-8 text-center hover:shadow-lg border border-transparent hover:border-black'
                        >

                          <img
                            src={director.image}
                            alt={director.name}
                            className='h-full w-full object-cover object-start mb-2'
                          />

                          <h1 className='text-lg min-[425px]:text-xl sm:text-xl lg:text-lg xl:text-xl font-medium'>{director.name}</h1>
                          <h1 className='text-gray-500 text-base min-[425px]:text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-medium'>{director.role}</h1>
                          <p className='my-3 lg:my-6 line-clamp-3 text-ellipsis font-medium text-gray-500'>{director.description}</p>
                          <button
                            onClick={() => openModal(director)}
                            className='font-medium uppercase '
                          >
                            Read More
                          </button>
                        </div>

                      )}
                    </div>

                    {/* MODAL */}
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        {/* BACKDROP */}
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]" />
                        </Transition.Child>

                        {/* MODAL CONTENT */}
                        <div className="fixed inset-0 top-30 flex items-start justify-center p-4">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 relative">
                              {/* CLOSE BUTTON */}
                              <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                              >
                                <MdOutlineClose className="h-6 w-6" />
                              </button>

                              {selectedItem && (
                                <>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.name}
                                  </Dialog.Title>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.role}
                                  </Dialog.Title>

                                  {/* MODAL CONTENT */}
                                  <p p className="mt-2 text-gray-600" >
                                    {selectedItem.description}
                                  </p>
                                </>

                              )}
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>

                  </>
                )}

                {/* KEY MANAGERIAL PERSONNEL */}
                {button.id === 'Key Managerial Personnel' && (
                  <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
                      {managerials.map((managerial) =>
                        <div
                          key={managerial.id}
                          className='flex flex-col justify-center items-center sm:items-center sm:text-center lg:items-center xl:items-center py-4 lg:py-8 lg:px-8 text-center hover:shadow-lg border border-black'
                        >

                          {/* <img
                            src={managerial.image}
                            alt={managerial.name}
                            className='h-full w-full object-cover object-start mb-2'
                          /> */}

                          <h1 className='text-lg min-[425px]:text-xl sm:text-xl lg:text-lg xl:text-xl font-medium'>{managerial.name}</h1>
                          <h1 className='text-gray-500 text-base min-[425px]:text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-medium'>{managerial.role}</h1>
                          {/* <p className='my-3 lg:my-6 line-clamp-3 text-ellipsis font-medium text-gray-500'>{managerial.description}</p> */}
                          <button
                            onClick={() => openModal(managerial)}
                            className='font-medium uppercase mt-6'
                          >
                            Read More
                          </button>
                        </div>

                      )}
                    </div>

                    {/* MODAL */}
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        {/* BACKDROP */}
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]" />
                        </Transition.Child>

                        {/* MODAL CONTENT */}
                        <div className="fixed inset-0 top-30 flex items-start justify-center p-4">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 relative">
                              {/* CLOSE BUTTON */}
                              <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                              >
                                <MdOutlineClose className="h-6 w-6" />
                              </button>

                              {selectedItem && (
                                <Dialog.Panel>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.name}
                                  </Dialog.Title>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.role}
                                  </Dialog.Title>

                                  {/* MODAL CONTENT */}
                                  <p p className="mt-2 text-gray-600" >
                                    {selectedItem.description}
                                  </p>
                                </Dialog.Panel>

                              )}
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>
                  </>
                )}

                {/* BOARD COMMITTEES */}
                {button.id === 'Board Committees' && (
                  <>
                    <div className="flex flex-col justify-start items-center space-y-4 py-2 sm:py-4">
                      {boardCommittessButtons.map((button) => (
                        <div key={button.id} className="w-full">

                          {/* BUTTON */}
                          <button
                            onClick={() =>
                              setBoardCommitteActiveButton(
                                boardCommitteActiveButton.includes(button.id)
                                  ? boardCommitteActiveButton.filter(id => id !== button.id) // Remove if already open
                                  : [...boardCommitteActiveButton, button.id] // Add if not open
                              )
                            }

                            className="w-full flex justify-between items-start text-left border-l-6 border-[#4169e1] py-2.5 px-3 sm:py-3.5 sm:px-4 md:px-6 md:py-3.5 bg-white cursor-pointer"
                          >
                            <h1 className="text-base min-[425px]:text-lg font-medium uppercase">{button.title}</h1>
                            {boardCommitteActiveButton === button.id ? (
                              <FaMinus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                            ) : (
                              <FaPlus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                            )}
                          </button>

                          {/* BUTTON CONTENTS */}
                          <div
                            className={`overflow-hidden transition-all duration-150 ${boardCommitteActiveButton.includes(button.id) ? 'h-full opacity-100 py-4' : 'max-h-0 opacity-0'
                              } mt-4`}
                          >
                            <div className="py-2 sm:py-4">
                              {boardCommittees
                                .filter((committee) => committee.id === button.id) // Find the matching committee
                                .map((committee) => (
                                  <div key={committee.id} className=' max-w-5xl container mx-auto'>
                                    <div className='overflow-x-auto'>
                                      <table className='w-full border border-gray-300'>
                                        <thead className='bg-slate-200'>
                                          <tr>
                                            <td className='text-base sm:text-md md:text-lg font-medium align-top py-2 px-4 border-b border-gray-300'>Name of the Director</td>
                                            <td className='text-base sm:text-md md:text-lg font-medium align-top py-2 px-4 border-b border-gray-300'>Position in the Committee</td>
                                            <td className='text-base sm:text-md md:text-lg font-medium align-top py-2 px-4 border-b border-gray-300'>Designation</td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {committee.details.map((person, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-200'}>
                                              <td className='text-sm md:text-md lg:text-base align-top py-2 px-4 border-b border-gray-300'>{person.directorName}</td>
                                              <td className='text-sm md:text-md lg:text-base align-top py-2 px-4 border-b border-gray-300'>{person.directorPosition}</td>
                                              <td className='text-sm md:text-md lg:text-base align-top py-2 px-4 border-b border-gray-300'>{person.directorDesignation}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                      <div className='my-4 flex justify-end items-center'>
                                        <p className='text-sm md:text-md lg:text-base'>Terms of Reference of {committee.title}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>


                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* CODES $ POLICIES */}
                {button.id === 'Codes & Policies' && (
                  <div className='max-w-6xl container mx-auto px-4 md:px-8 xl:px-0'>
                    <ul className='list-decimal space-y-6'>
                      <li className='text-cyan-600 hover:text-cyan-900 transition-all duration-75 ease-in-out'>
                        <a href="#" className='ml-2'>Corporate Social Responsibility Policy</a>
                      </li>
                      <li className='text-cyan-600 hover:text-cyan-900 transition-all duration-75 ease-in-out'>
                        <a href="#" className='ml-2'>Employee Fraternization Policy</a>
                      </li>
                      <li className='text-cyan-600 hover:text-cyan-900 transition-all duration-75 ease-in-out'>
                        <a href="#" className='ml-2'>Policy for Prevention of Sexual Harassment at Workplace</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CorporateGovernanceContent;
