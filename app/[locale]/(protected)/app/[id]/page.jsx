"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
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
        if (!response.ok) throw new Error("Failed to fetch surface options.");
        const data = await response.json();
        setSurfaceOptions(data);
      } catch (error) {
        console.error("Error fetching surface options:", error.message);
      }
    };

    fetchSurfaceOptions();
  }, []);

  // Update formData when id changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, id: id || "" }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Convert surfaceId to a number explicitly
    if (name === "surfaceId") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://ocean-dashbord-elzu.vercel.app/api/Devis/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error submitting the form.");
      alert("Form submitted successfully!");
      setFormData((prev) => ({
        ...prev,
        nameEntreprise: "",
        namePersone: "",
        email: "",
        VotreFonction: "",
        Adress: "",
        message: "",
        etage: "",
        surfaceId: "",
        status: "",
        numberPhon: "",
        ville: "",
        datecalendrier: "",
      }));
    } catch (error) {
      console.error("Submission error:", error.message);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className=" dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Update Devis Form
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/** Input fields */}
          <InputField
            label="Enterprise Name"
            id="nameEntreprise"
            name="nameEntreprise"
            value={formData.nameEntreprise}
            onChange={handleChange}
          />
          <InputField
            label="Person Name"
            id="namePersone"
            name="namePersone"
            value={formData.namePersone}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Your Function"
            id="VotreFonction"
            name="VotreFonction"
            value={formData.VotreFonction}
            onChange={handleChange}
          />
          <InputField
            label="Address"
            id="Adress"
            name="Adress"
            value={formData.Adress}
            onChange={handleChange}
          />
          <InputField
            label="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <InputField
            label="Floor"
            id="etage"
            name="etage"
            type="number"
            value={formData.etage}
            onChange={handleChange}
          />
          {/** Dropdown for surface options */}
          <SelectField
            label="Surface"
            id="surfaceId"
            name="surfaceId"
            value={formData.surfaceId}
            onChange={handleChange}
            options={surfaceOptions}
            placeholder="Select a surface"
          />
          {/** Status dropdown */}
          <SelectField
            label="Status"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { id: "PENDING", valeur: "PENDING" },
              { id: "CONFIRMED", valeur: "CONFIRMED" },
              { id: "REJECTED", valeur: "REJECTED" },
              { id: "COMPLETED", valeur: "COMPLETED" },
            ]}
          />
          <InputField
            label="Phone Number"
            id="numberPhon"
            name="numberPhon"
            type="number"
            value={formData.numberPhon}
            onChange={handleChange}
          />
          <InputField
            label="City"
            id="ville"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
          />
          <InputField
            label="Date"
            id="datecalendrier"
            name="datecalendrier"
            type="date"
            value={formData.datecalendrier}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

// Utility components for cleaner code
function InputField({ label, id, name, type = "text", value, onChange }) {
  return (
    <div className="w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
      />
    </div>
  );
}

function SelectField({ label, id, name, value, onChange, options, placeholder }) {
  return (
    <div className="w-full">
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.valeur}
          </option>
        ))}
      </select>
    </div>
  );
}
