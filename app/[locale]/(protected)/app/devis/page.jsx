"use client";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Page() {
  const [formData, setFormData] = useState({
    nameEntreprise: "",
    namePersone: "",
    email: "",
    VotreFonction: "",
    Adress: "",
    codePostall: "8000",
    message: "",
    etage: "",
    surfaceId: "",
    status: "",
    numberPhon: "",
    ville: "",
    datecalendrier: "",
  });

  const [surfaceOptions, setSurfaceOptions] = useState([]);

  // Fetch surface options from API
  useEffect(() => {
    const fetchSurfaceOptions = async () => {
      try {
        const response = await fetch("https://ocean-dashbord-elzu.vercel.app/api/surface");
        if (response.ok) {
          const data = await response.json();
          setSurfaceOptions(data); // Assuming `data` is an array of surfaces
        } else {
          console.error("Failed to fetch surface options");
        }
      } catch (error) {
        console.error("Error fetching surface options:", error);
      }
    };

    fetchSurfaceOptions();
  }, []);

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
          surfaceId: "",
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
        className=" dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">
          Create Devi Form
        </h2>

        {/* Horizontal Inputs for all fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="w-full">
            <Label
              className="block text-gray-700  mb-2"
              htmlFor="nameEntreprise"
            >
              Enterprise Name
            </Label>
            <Input
              id="nameEntreprise"
              name="nameEntreprise"
              type="text"
              value={formData.nameEntreprise}
              onChange={handleChange}
              
            />
          </div>

          <div className="w-full">
            <Label
              
              htmlFor="namePersone"
            >
              Person Name
            </Label>
            <Input
              id="namePersone"
              name="namePersone"
              type="text"
              value={formData.namePersone}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <Label
             
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>

          <div className="w-full">
            <Label
              htmlFor="VotreFonction"
            >
              Your Function
            </Label>
            <Input
              id="VotreFonction"
              name="VotreFonction"
              type="text"
              value={formData.VotreFonction}
              onChange={handleChange}
             
            />
          </div>

          <div className="w-full">
            <Label
             
              htmlFor="Adress"
            >
              Address
            </Label>
            <Input
              id="Adress"
              name="Adress"
              type="text"
              value={formData.Adress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

      

          <div className="w-full">
            <Label
             
              htmlFor="message"
            >
              Message
            </Label>
            <Input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <Label
              
              htmlFor="etage"
            >
              Floor
            </Label>
            <Input
              id="etage"
              name="etage"
              type="number"
              value={formData.etage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="surfaceId">Surface</Label>
            <select
              id="surfaceId"
              name="surfaceId"
              value={formData.surfaceId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            >
              <option value="" disabled>
                Select a surface
              </option>
              {surfaceOptions.map((surface) => (
                <option key={surface.id} value={surface.id}>
                  {surface.valeur}
                </option>
              ))}
            </select>
          </div>


          <div className="w-full">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            >
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="REJECTED">REJECTED</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>


          <div className="w-full">
            <Label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="numberPhon"
            >
              Phone Number
            </Label>
            <Input
              id="numberPhon"
              name="numberPhon"
              type="number"
              value={formData.numberPhon}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <Label
            
              htmlFor="ville"
            >
              City
            </Label>
            <Input
              id="ville"
              name="ville"
              type="text"
              value={formData.ville}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <div className="w-full">
            <Label
              htmlFor="datecalendrier"
            >
              Date
            </Label>
            <Input
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
