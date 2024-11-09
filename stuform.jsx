'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [formData, setFormData] = useState({
    applicationMode: '',
    ageAtEnrollment: '',
    currUnits1stSemEnrolled: '',
    currUnits1stSemApproved: '',
    currUnits2ndSemApproved: '',
    currUnits2ndSemGrade: '',
    displaced: '',
    debtor: '',
    tuitionFeesUpToDate: '',
    gender: '',
    scholarshipHolder: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (value === '' || /^\d+$/.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to a server
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
              <Label htmlFor="applicationMode">Application Mode</Label>
              <Input
                id="applicationMode"
                name="applicationMode"
                value={formData.applicationMode}
                onChange={handleInputChange}
                placeholder="Enter a number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ageAtEnrollment">Age at Enrollment</Label>
              <Input
                id="ageAtEnrollment"
                name="ageAtEnrollment"
                value={formData.ageAtEnrollment}
                onChange={handleInputChange}
                placeholder="Enter age"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currUnits1stSemEnrolled">Curricular Units 1st Sem (Enrolled)</Label>
              <Input
                id="currUnits1stSemEnrolled"
                name="currUnits1stSemEnrolled"
                value={formData.currUnits1stSemEnrolled}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currUnits1stSemApproved">Curricular Units 1st Sem (Approved)</Label>
              <Input
                id="currUnits1stSemApproved"
                name="currUnits1stSemApproved"
                value={formData.currUnits1stSemApproved}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currUnits2ndSemApproved">Curricular Units 2nd Sem (Approved)</Label>
              <Input
                id="currUnits2ndSemApproved"
                name="currUnits2ndSemApproved"
                value={formData.currUnits2ndSemApproved}
                onChange={handleInputChange}
                placeholder="Enter number of units"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currUnits2ndSemGrade">Curricular Units 2nd Sem (Grade)</Label>
              <Input
                id="currUnits2ndSemGrade"
                name="currUnits2ndSemGrade"
                value={formData.currUnits2ndSemGrade}
                onChange={handleInputChange}
                placeholder="Enter grade"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="displaced">Displaced</Label>
              <Select onValueChange={(value) => handleSelectChange('displaced', value)}>
                <SelectTrigger id="displaced">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No</SelectItem>
                  <SelectItem value="1">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="debtor">Debtor</Label>
              <Select onValueChange={(value) => handleSelectChange('debtor', value)}>
                <SelectTrigger id="debtor">
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
              <Label htmlFor="tuitionFeesUpToDate">Tuition Fees Up to Date</Label>
              <Select onValueChange={(value) => handleSelectChange('tuitionFeesUpToDate', value)}>
                <SelectTrigger id="tuitionFeesUpToDate">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No</SelectItem>
                  <SelectItem value="1">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => handleSelectChange('gender', value)}>
                <SelectTrigger id="gender">
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
            <Label htmlFor="scholarshipHolder">Scholarship Holder</Label>
            <Select onValueChange={(value) => handleSelectChange('scholarshipHolder', value)}>
              <SelectTrigger id="scholarshipHolder">
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
        <Button type="submit" className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  )
}
