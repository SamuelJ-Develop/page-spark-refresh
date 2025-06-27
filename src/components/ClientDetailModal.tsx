import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 text-gray-900">
        <DialogHeader className="bg-gray-50 -m-6 mb-6 p-6 rounded-t-lg border-b border-gray-200">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-gray-900">
              <FileText className="h-5 w-5 text-yellow-600" />
              Client Details - {clientData.code}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client Information */}
          <Card className="lg:col-span-2 border-l-4 border-l-yellow-500 shadow-sm">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Phone className="h-4 w-4 text-yellow-600" />
                Client Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm font-medium text-gray-600">Code/Name:</span>
                  <p className="font-medium text-gray-900">{clientData.code} - {clientData.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">File Number:</span>
                  <p className="font-medium text-gray-900">{clientData.fileNum}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Account Ref 1:</span>
                  <p className="text-gray-700">{clientData.accountRef1}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Account Ref 2:</span>
                  <p className="text-gray-700">{clientData.accountRef2}</p>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2 text-gray-900">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                  Debtor Information
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Name:</span>
                    <p className="font-medium text-gray-900">{clientData.debtorName}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Address:</span>
                    <p className="text-gray-700">{clientData.address}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Mobile Phone:</span>
                    <p className="text-gray-700">{clientData.mobile}</p>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              <div>
                <h4 className="font-medium mb-3 text-gray-900">Additional Information</h4>
                <div>
                  <span className="text-sm font-medium text-gray-600">Property Address:</span>
                  <p className="text-gray-700">{clientData.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Debt Summary */}
          <Card className="border-l-4 border-l-green-600 shadow-sm">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <DollarSign className="h-4 w-4 text-green-600" />
                Debt Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Original Debt:</span>
                  <span className="font-medium text-gray-900">{clientData.originalDebt}</span>
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
                  <span className="font-medium text-gray-700">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Interest:</span>
                  <span className="font-medium text-gray-700">-</span>
                </div>
                
                <Separator className="bg-gray-200" />
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Paid:</span>
                  <span className="font-medium text-green-600">{clientData.totalPaid}</span>
                </div>
                <div className="flex justify-between bg-green-50 p-3 rounded-lg border border-green-200">
                  <span className="font-medium text-green-800">Outstanding:</span>
                  <span className="font-bold text-lg text-green-800">{clientData.outstanding}</span>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              <div>
                <h4 className="font-medium mb-4 text-gray-900">Debt Ageing</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current:</span>
                    <span className="text-red-600 font-medium">-$681.18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">30 Days:</span>
                    <span className="text-gray-700">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">60 Days:</span>
                    <span className="text-gray-700">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">90 Days:</span>
                    <span className="text-gray-700">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">120 Days:</span>
                    <span className="text-gray-700">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">150+ Days:</span>
                    <span className="text-gray-700">$0.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Section */}
        <Card className="mt-8 shadow-sm">
          <CardContent className="p-0">
            <Tabs defaultValue="arrangement" className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-gray-50 rounded-none border-b border-gray-200">
                <TabsTrigger 
                  value="arrangement" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  Arrangement
                </TabsTrigger>
                <TabsTrigger 
                  value="history" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  History
                </TabsTrigger>
                <TabsTrigger 
                  value="notes" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  Notes
                </TabsTrigger>
                <TabsTrigger 
                  value="interest" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  Interest
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger 
                  value="payments" 
                  className="data-[state=active]:bg-white data-[state=active]:text-yellow-800 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-500"
                >
                  Payments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="arrangement" className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-600">Arrangement Date:</span>
                      <p className="font-medium text-gray-900">{clientData.arrangement.date}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-600">Frequency:</span>
                      <p className="font-medium text-gray-900">{clientData.arrangement.frequency}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-600">Next Instalment:</span>
                      <p className="font-medium text-gray-900">{clientData.arrangement.nextInstalment}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-600">Arrears:</span>
                      <p className="font-medium text-gray-900">{clientData.arrangement.arrears}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Attach Files</Button>
                    <input type="file" className="hidden" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50 border-b-gray-200">
                      <TableHead className="font-semibold text-gray-900">Date</TableHead>
                      <TableHead className="font-semibold text-gray-900">Time</TableHead>
                      <TableHead className="font-semibold text-gray-900">Op</TableHead>
                      <TableHead className="font-semibold text-gray-900">Note</TableHead>
                      <TableHead className="font-semibold text-gray-900">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historyData.map((item, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 border-b-gray-200">
                        <TableCell className="text-gray-700">{item.date}</TableCell>
                        <TableCell className="text-gray-700">{item.time}</TableCell>
                        <TableCell className="font-medium text-gray-900">{item.operator}</TableCell>
                        <TableCell className="max-w-xs text-gray-700">{item.note}</TableCell>
                        <TableCell className="font-medium text-green-700">{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="notes" className="p-6">
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                   <p className="text-gray-600">Notes functionality would be implemented here.</p>
                 </div>
               </TabsContent>

              <TabsContent value="interest" className="p-6">
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                   <p className="text-gray-600">Interest calculations would be displayed here.</p>
                 </div>
               </TabsContent>

              <TabsContent value="documents" className="p-6">
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                   <p className="text-gray-600">Document management would be implemented here.</p>
                 </div>
               </TabsContent>

              <TabsContent value="payments" className="p-6">
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                   <p className="text-gray-600">Payment history and management would be implemented here.</p>
                 </div>
               </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Separator className="my-6 bg-gray-200" />
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">Enter a Note</Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">View History</Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">Contact Operator</Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">Advise of Payment</Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">Print</Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">Export to Excel</Button>
          <Button onClick={onClose} className="bg-gray-800 hover:bg-gray-900 text-white">Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
