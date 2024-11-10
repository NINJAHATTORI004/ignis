'use client'

import { useState } from 'react'
//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
//import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
//import { useToast } from "@/components/ui/use-toast"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Server Action
async function submitStudentData(formData) {
  'use server'

  try {
    const data = {
      Application_mode: parseInt(formData.get('Application_mode')),
      Displaced: parseInt(formData.get('Displaced')),
      Debtor: parseInt(formData.get('Debtor')),
      Tuition_fees_up_to_date: parseInt(formData.get('Tuition_fees_up_to_date')),
      Gender: parseInt(formData.get('Gender')),
      Scholarship_holder: parseInt(formData.get('Scholarship_holder')),
      Age_at_enrollment: parseInt(formData.get('Age_at_enrollment')),
      Curricular_units_1st_sem_enrolled: parseInt(formData.get('Curricular_units_1st_sem_enrolled')),
      Curricular_units_1st_sem_approved: parseInt(formData.get('Curricular_units_1st_sem_approved')),
      Curricular_units_1st_sem_grade: parseFloat(formData.get('Curricular_units_1st_sem_grade')),
      Curricular_units_2nd_sem_enrolled: parseInt(formData.get('Curricular_units_2nd_sem_enrolled')),
      Curricular_units_2nd_sem_approved: parseInt(formData.get('Curricular_units_2nd_sem_approved')),
      Curricular_units_2nd_sem_grade: parseFloat(formData.get('Curricular_units_2nd_sem_grade')),
    };

    // Replace with your actual Render API endpoint
    const response = await fetch('https://your-render-api.onrender.com/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to submit data');
    }

    const result = await response.json();
    return { success: true, data: result };

  } catch (error) {
    console.error('Error submitting student data:', error);
    return { success: false, error: 'Failed to submit student data' };
  }
}

// Frontend Component
export default function Component() {
  const { toast } = useToast()
  const [isPending, setIsPending] = useState(false)
  const [formData, setFormData] = useState({
    Application_mode: '',
    Displaced: '',
    Debtor: '',
    Tuition_fees_up_to_date: '',
    Gender: '',
    Scholarship_holder: '',
    Age_at_enrollment: '',
    Curricular_units_1st_sem_enrolled: '',
    Curricular_units_1st_sem_approved: '',
    Curricular_units_1st_sem_grade: '',
    Curricular_units_2nd_sem_enrolled: '',
    Curricular_units_2nd_sem_approved: '',
    Curricular_units_2nd_sem_grade: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    
    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitStudentData(formDataObj)
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Student data submitted successfully",
        })
        // Reset form
        setFormData({
          Application_mode: '',
          Displaced: '',
          Debtor: '',
          Tuition_fees_up_to_date: '',
          Gender: '',
          Scholarship_holder: '',
          Age_at_enrollment: '',
          Curricular_units_1st_sem_enrolled: '',
          Curricular_units_1st_sem_approved: '',
          Curricular_units_1st_sem_grade: '',
          Curricular_units_2nd_sem_enrolled: '',
          Curricular_units_2nd_sem_approved: '',
          Curricular_units_2nd_sem_grade: '',
        })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit student data. Please try again.",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Student Enrollment Form</CardTitle>
        <CardDescription>Please fill out all the fields below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Application_mode">Application Mode</Label>
              <Input
                id="Application_mode"
                name="Application_mode"
                value={formData.Application_mode}
                onChange={handleInputChange}
                placeholder="Enter a number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Age_at_enrollment">Age at Enrollment</Label>
              <Input
                id="Age_at_enrollment"
                name="Age_at_enrollment"
                value={formData.Age_at_enrollment}
                onChange={handleInputChange}
                placeholder="Enter age"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Curricular_units_1st_sem_enrolled">Curricular Units 1st Sem (Enrolled)</Label>
              <Input
                id="Curricular_units_1st_sem_enrolled"
                name="Curricular_units_1st_sem_enrolled"
                value={formData.Curricular_units_1st_sem_enrolled}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Curricular_units_1st_sem_approved">Curricular Units 1st Sem (Approved)</Label>
              <Input
                id="Curricular_units_1st_sem_approved"
                name="Curricular_units_1st_sem_approved"
                value={formData.Curricular_units_1st_sem_approved}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="Curricular_units_1st_sem_grade">Curricular Units 1st Sem (Grade)</Label>
            <Input
              id="Curricular_units_1st_sem_grade"
              name="Curricular_units_1st_sem_grade"
              value={formData.Curricular_units_1st_sem_grade}
              onChange={handleInputChange}
              placeholder="Enter grade"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Curricular_units_2nd_sem_enrolled">Curricular Units 2nd Sem (Enrolled)</Label>
              <Input
                id="Curricular_units_2nd_sem_enrolled"
                name="Curricular_units_2nd_sem_enrolled"
                value={formData.Curricular_units_2nd_sem_enrolled}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Curricular_units_2nd_sem_approved">Curricular Units 2nd Sem (Approved)</Label>
              <Input
                id="Curricular_units_2nd_sem_approved"
                name="Curricular_units_2nd_sem_approved"
                value={formData.Curricular_units_2nd_sem_approved}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="Curricular_units_2nd_sem_grade">Curricular Units 2nd Sem (Grade)</Label>
            <Input
              id="Curricular_units_2nd_sem_grade"
              name="Curricular_units_2nd_sem_grade"
              value={formData.Curricular_units_2nd_sem_grade}
              onChange={handleInputChange}
              placeholder="Enter grade"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Displaced">Displaced</Label>
              <Select onValueChange={(value) => handleSelectChange('Displaced', value)}>
                <SelectTrigger id="Displaced">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No</SelectItem>
                  <SelectItem value="1">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="Debtor">Debtor</Label>
              <Select onValueChange={(value) => handleSelectChange('Debtor', value)}>
                <SelectTrigger id="Debtor">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No</SelectItem>
                  <SelectItem value="1">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Tuition_fees_up_to_date">Tuition Fees Up to Date</Label>
              <Select onValueChange={(value) => handleSelectChange('Tuition_fees_up_to_date', value)}>
                <SelectTrigger id="Tuition_fees_up_to_date">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No</SelectItem>
                  <SelectItem value="1">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="Gender">Gender</Label>
              <Select onValueChange={(value) => handleSelectChange('Gender', value)}>
                <SelectTrigger id="Gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Male</SelectItem>
                  <SelectItem value="1">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="Scholarship_holder">Scholarship Holder</Label>
            <Select onValueChange={(value) => handleSelectChange('Scholarship_holder', value)}>
              <SelectTrigger id="Scholarship_holder">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No</SelectItem>
                <SelectItem value="1">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" disabled={isPending} onClick={handleSubmit}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  )
}