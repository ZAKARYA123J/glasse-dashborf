"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Page() {
  const [formData, setFormData] = useState({
    nameEntreprise: "",
    namePersone: "",
    email: "",
    VotreFonction: "",
    Adress: "",
    codePostall: "",
    message: "",
    etage: "",
    surfaceId: 1,
    status: "",
    numberPhon: "",
    ville: "",
    datecalendrier: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ocean-dashbord-elzu.vercel.app/api/Devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          nameEntreprise: "",
          namePersone: "",
          email: "",
          VotreFonction: "",
          Adress: "",
          codePostall: "",
          message: "",
          etage: "",
          surfaceId: 1,
          status: "",
          numberPhon: "",
          ville: "",
          datecalendrier: "",
        });
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">
          Create Devi Form
        </h2>

        {/* Horizontal Inputs for all fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="w-full">
            <label
              className="block text-gray-700  mb-2"
              htmlFor="nameEntreprise"
            >
              Enterprise Name
            </label>
            <input
              id="nameEntreprise"
              name="nameEntreprise"
              type="text"
              value={formData.nameEntreprise}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300  color-black dark:border-gray-600 bg-white"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="namePersone"
            >
              Person Name
            </label>
            <input
              id="namePersone"
              name="namePersone"
              type="text"
              value={formData.namePersone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="VotreFonction"
            >
              Your Function
            </label>
            <input
              id="VotreFonction"
              name="VotreFonction"
              type="text"
              value={formData.VotreFonction}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="Adress"
            >
              Address
            </label>
            <input
              id="Adress"
              name="Adress"
              type="text"
              value={formData.Adress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="codePostall"
            >
              Postal Code
            </label>
            <input
              id="codePostall"
              name="codePostall"
              type="number"
              value={formData.codePostall}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="etage"
            >
              Floor
            </label>
            <input
              id="etage"
              name="etage"
              type="number"
              value={formData.etage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="surfaceId"
            >
              Surface ID
            </label>
            <input
              id="surfaceId"
              name="surfaceId"
              type="text"
              value={formData.surfaceId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <input
              id="status"
              name="status"
              type="text"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="numberPhon"
            >
              Phone Number
            </label>
            <input
              id="numberPhon"
              name="numberPhon"
              type="number"
              value={formData.numberPhon}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="ville"
            >
              City
            </label>
            <input
              id="ville"
              name="ville"
              type="text"
              value={formData.ville}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="datecalendrier"
            >
              Date
            </label>
            <input
              id="datecalendrier"
              name="datecalendrier"
              type="date"
              value={formData.datecalendrier}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>
            
        </div>
        <Button
          type="submit"
        
        >
          Insert
        </Button>
     
      </form>
    </div>
  );
}
