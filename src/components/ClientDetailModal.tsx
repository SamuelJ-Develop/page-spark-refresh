
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
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Client Details - {clientData.code}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Client Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Code/Name:</span>
                  <p className="font-medium">{clientData.code} - {clientData.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">File Number:</span>
                  <p className="font-medium">{clientData.fileNum}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Account Ref 1:</span>
                  <p>{clientData.accountRef1}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Account Ref 2:</span>
                  <p>{clientData.accountRef2}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Debtor Information
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Name:</span>
                    <p className="font-medium">{clientData.debtorName}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Address:</span>
                    <p>{clientData.address}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Mobile Phone:</span>
                    <p>{clientData.mobile}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Additional Information</h4>
                <div>
                  <span className="text-sm font-medium text-gray-500">Property Address:</span>
                  <p>{clientData.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Debt Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Debt Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Original Debt:</span>
                  <span className="font-medium">{clientData.originalDebt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Current Debt:</span>
                  <span className="font-medium text-red-600">{clientData.currentDebt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Credits:</span>
                  <span className="font-medium text-green-600">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Costs:</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Interest:</span>
                  <span className="font-medium">-</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm text-gray-500">Total Paid:</span>
                  <span className="font-medium text-green-600">{clientData.totalPaid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Outstanding:</span>
                  <span className="font-bold text-lg">{clientData.outstanding}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Debt Ageing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Current:</span>
                    <span>-$681.18</span>
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
        <Card className="mt-6">
          <CardContent className="p-0">
            <Tabs defaultValue="arrangement" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="arrangement">Arrangement</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="interest">Interest</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>

              <TabsContent value="arrangement" className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Arrangement Date:</span>
                      <p className="font-medium">{clientData.arrangement.date}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Frequency:</span>
                      <p className="font-medium">{clientData.arrangement.frequency}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Next Instalment:</span>
                      <p className="font-medium">{clientData.arrangement.nextInstalment}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Arrears:</span>
                      <p className="font-medium">{clientData.arrangement.arrears}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm">Attach Files</Button>
                    <input type="file" className="hidden" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Op</TableHead>
                      <TableHead>Note</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historyData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.operator}</TableCell>
                        <TableCell className="max-w-xs">{item.note}</TableCell>
                        <TableCell className="font-medium">{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="notes" className="p-6">
                <p className="text-gray-600">Notes functionality would be implemented here.</p>
              </TabsContent>

              <TabsContent value="interest" className="p-6">
                <p className="text-gray-600">Interest calculations would be displayed here.</p>
              </TabsContent>

              <TabsContent value="documents" className="p-6">
                <p className="text-gray-600">Document management would be implemented here.</p>
              </TabsContent>

              <TabsContent value="payments" className="p-6">
                <p className="text-gray-600">Payment history and management would be implemented here.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline">Enter a Note</Button>
          <Button variant="outline">View History</Button>
          <Button variant="outline">Contact Operator</Button>
          <Button variant="outline">Advise of Payment</Button>
          <Button variant="outline">Print</Button>
          <Button variant="outline">Export to Excel</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
