
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Phone, MapPin, Calendar, DollarSign, Clock, X } from "lucide-react";

interface ClientDetailModalProps {
  client: any;
  onClose: () => void;
}

export const ClientDetailModal = ({ client, onClose }: ClientDetailModalProps) => {
  const clientData = {
    code: "NN12464",
    name: "City of Onkaparinga",
    fileNum: "3121427",
    accountRef1: "1002910260722",
    accountRef2: "25072",
    debtorName: "M MCASSEY",
    address: "115 HILLIER RD REYNELLA SA 5161",
    mobile: "0419 823 499",
    originalDebt: "$2,681.92",
    currentDebt: "$7,326.18",
    totalPaid: "$2,650.00",
    outstanding: "$4,676.18",
    status: "ARR - ARRANGEMENT IN PLACE",
    nextActivity: "04 Jul 2025",
    operator: "NJ - Nadja Jahnke",
    arrangement: {
      date: "09 Apr 2025",
      frequency: "Fortnightly",
      nextInstalment: "$50.00 on 01 Jul 2025",
      arrears: "$0.00"
    }
  };

  const historyData = [
    {
      date: "10 Jun 2025",
      time: "11:11:49",
      operator: "NJ",
      note: "*** RECORD UPDATES APPLIED ****",
      amount: ""
    },
    {
      date: "10 Jun 2025", 
      time: "11:08:51",
      operator: "NJ",
      note: "*** RECORD UPDATES APPLIED ****",
      amount: ""
    },
    {
      date: "10 Jun 2025",
      time: "10:15:03", 
      operator: "NJ",
      note: "DEBT ADJUSTMENT",
      amount: "$460.77"
    },
    {
      date: "22 May 2025",
      time: "14:34:46",
      operator: "NJ", 
      note: "PAYMENT - DIRECT TO CLIENT ON 20 May 2025",
      amount: "$250.00"
    }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 -m-6 mb-6 p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-blue-800">
              <FileText className="h-5 w-5" />
              Client Details - {clientData.code}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-blue-600 hover:bg-blue-100">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client Information */}
          <Card className="lg:col-span-2 border-l-4 border-l-blue-500 shadow-md">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Phone className="h-4 w-4" />
                Client Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-blue-600">Code/Name:</span>
                  <p className="font-medium text-gray-800">{clientData.code} - {clientData.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-blue-600">File Number:</span>
                  <p className="font-medium text-gray-800">{clientData.fileNum}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-blue-600">Account Ref 1:</span>
                  <p className="text-gray-700">{clientData.accountRef1}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-blue-600">Account Ref 2:</span>
                  <p className="text-gray-700">{clientData.accountRef2}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-700">
                  <MapPin className="h-4 w-4" />
                  Debtor Information
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-green-600">Name:</span>
                    <p className="font-medium text-gray-800">{clientData.debtorName}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600">Address:</span>
                    <p className="text-gray-700">{clientData.address}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600">Mobile Phone:</span>
                    <p className="text-gray-700">{clientData.mobile}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2 text-purple-700">Additional Information</h4>
                <div>
                  <span className="text-sm font-medium text-purple-600">Property Address:</span>
                  <p className="text-gray-700">{clientData.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Debt Summary */}
          <Card className="border-l-4 border-l-emerald-500 shadow-md">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="flex items-center gap-2 text-emerald-800">
                <DollarSign className="h-4 w-4" />
                Debt Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Original Debt:</span>
                  <span className="font-medium text-gray-800">{clientData.originalDebt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current Debt:</span>
                  <span className="font-medium text-red-600">{clientData.currentDebt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Credits:</span>
                  <span className="font-medium text-green-600">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Costs:</span>
                  <span className="font-medium text-gray-800">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Interest:</span>
                  <span className="font-medium text-gray-800">-</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm text-gray-600">Total Paid:</span>
                  <span className="font-medium text-green-600">{clientData.totalPaid}</span>
                </div>
                <div className="flex justify-between bg-emerald-50 p-2 rounded">
                  <span className="font-medium text-emerald-700">Outstanding:</span>
                  <span className="font-bold text-lg text-emerald-800">{clientData.outstanding}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2 text-indigo-700">Debt Ageing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Current:</span>
                    <span className="text-red-600">-$681.18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30 Days:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>60 Days:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>90 Days:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>120 Days:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>150+ Days:</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Section */}
        <Card className="mt-6 shadow-md">
          <CardContent className="p-0">
            <Tabs defaultValue="arrangement" className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-gray-50">
                <TabsTrigger 
                  value="arrangement" 
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  Arrangement
                </TabsTrigger>
                <TabsTrigger 
                  value="history" 
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                  History
                </TabsTrigger>
                <TabsTrigger 
                  value="notes" 
                  className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  Notes
                </TabsTrigger>
                <TabsTrigger 
                  value="interest" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Interest
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger 
                  value="payments" 
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  Payments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="arrangement" className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-blue-600">Arrangement Date:</span>
                      <p className="font-medium text-blue-800">{clientData.arrangement.date}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-green-600">Frequency:</span>
                      <p className="font-medium text-green-800">{clientData.arrangement.frequency}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-purple-600">Next Instalment:</span>
                      <p className="font-medium text-purple-800">{clientData.arrangement.nextInstalment}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-orange-600">Arrears:</span>
                      <p className="font-medium text-orange-800">{clientData.arrangement.arrears}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Attach Files</Button>
                    <input type="file" className="hidden" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-green-50">
                      <TableHead className="font-semibold text-green-700">Date</TableHead>
                      <TableHead className="font-semibold text-green-700">Time</TableHead>
                      <TableHead className="font-semibold text-green-700">Op</TableHead>
                      <TableHead className="font-semibold text-green-700">Note</TableHead>
                      <TableHead className="font-semibold text-green-700">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historyData.map((item, index) => (
                      <TableRow key={index} className="hover:bg-green-50">
                        <TableCell className="text-gray-700">{item.date}</TableCell>
                        <TableCell className="text-gray-700">{item.time}</TableCell>
                        <TableCell className="font-medium text-green-700">{item.operator}</TableCell>
                        <TableCell className="max-w-xs text-gray-700">{item.note}</TableCell>
                        <TableCell className="font-medium text-green-600">{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="notes" className="p-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700">Notes functionality would be implemented here.</p>
                </div>
              </TabsContent>

              <TabsContent value="interest" className="p-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-700">Interest calculations would be displayed here.</p>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="p-6">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">Document management would be implemented here.</p>
                </div>
              </TabsContent>

              <TabsContent value="payments" className="p-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-pink-700">Payment history and management would be implemented here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Enter a Note</Button>
          <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">View History</Button>
          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Contact Operator</Button>
          <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">Advise of Payment</Button>
          <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">Print</Button>
          <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">Export to Excel</Button>
          <Button onClick={onClose} className="bg-gray-600 hover:bg-gray-700">Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
