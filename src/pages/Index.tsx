
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, FileText, User, Settings, LogOut, Bell, Filter, Download, Eye, Calendar, DollarSign } from "lucide-react";
import { ClientDetailModal } from "@/components/ClientDetailModal";
import { PasswordChangeModal } from "@/components/PasswordChangeModal";

const Index = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const workQueueData = [
    {
      id: "NN12464",
      accountRef: "4224125",
      clientRef: "141520011040",
      debtorName: "S HUA",
      status: "AWAITING CLIENT INSTRUCTION",
      requested: "17 Jun 2025",
      reviewDate: "17 Jun 2025",
      amount: "$2,681.92"
    },
    {
      id: "NN12464",
      accountRef: "3120741",
      clientRef: "169904029825",
      debtorName: "THE ESTATE OF CONSTANCE MARY CONWAY AND LEIGH MAXWELL NEWCOMBE",
      status: "AWAITING CLIENT INSTRUCTION",
      requested: "20 Jun 2025",
      reviewDate: "20 Jun 2025",
      amount: "$14,970.48"
    },
    {
      id: "NN12464",
      accountRef: "3137814",
      clientRef: "109959000744",
      debtorName: "B C KERNICK & R W R HAGE & G H BELL",
      status: "AWAITING CLIENT INSTRUCTION",
      requested: "23 Jun 2025",
      reviewDate: "23 Jun 2025",
      amount: "$7,162.40"
    }
  ];

  const fileSearchData = [
    {
      fileNum: "3121427",
      accountRef: "1002910260722",
      acRef2: "25072",
      debtorName: "M MCASSEY",
      plaintNum: "",
      amount: "$2,681.92",
      balance: "$4,676.18",
      status: "ARR",
      portfolio: "NN12464"
    },
    {
      fileNum: "3120720",
      accountRef: "1003290235094",
      acRef2: "23569",
      debtorName: "M ONSOY AND S ONSOY",
      plaintNum: "",
      amount: "$14,970.48",
      balance: "$22,445.02",
      status: "L P I",
      portfolio: "NN12464"
    },
    {
      fileNum: "3142851",
      accountRef: "1004040303031",
      acRef2: "30303",
      debtorName: "PETER CHARLES CROOK",
      plaintNum: "CIV-23-013538",
      amount: "$7,162.40",
      balance: "$8,609.92",
      status: "T ONKS",
      portfolio: "NN12464"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg border-b border-blue-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black shadow-md">
                a
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">arma</h1>
                <p className="text-sm text-blue-100">debt resolution</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-500">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-blue-100">Logged in as:</span>
              <span className="font-medium text-white">James Smith</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-blue-500"
              onClick={() => setShowPasswordModal(true)}
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-500">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent h-12">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="file-enquiry" 
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                File Enquiry
              </TabsTrigger>
              <TabsTrigger 
                value="file-entry" 
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                File Entry
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-0">
              <div className="py-6">
                {/* Welcome Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="lg:col-span-1 border-l-4 border-l-blue-500 shadow-md">
                    <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <CardTitle className="text-lg text-blue-800">Welcome</CardTitle>
                      <CardDescription className="text-blue-600">
                        This is your Home page. To the right you will see a list of files awaiting instructions from you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-gray-600">
                        To search for a specific file that is not in your work queue, click on File Enquiry and enter a search criteria.
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2 text-gray-800">User Stats</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Your Work Queue:</span>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">23 files</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="showActioned" className="rounded text-blue-600" />
                        <label htmlFor="showActioned" className="text-sm">Show Actioned Files</label>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" variant="outline">
                        Refresh Work Queue
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Work Queue */}
                  <Card className="lg:col-span-3 shadow-md">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-green-800">
                            <FileText className="h-5 w-5" />
                            Work Queue - 23 files
                          </CardTitle>
                          <CardDescription className="text-green-600">Files in your queue awaiting instructions</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                          </Button>
                          <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableHead className="font-semibold text-gray-700">Portfolio</TableHead>
                            <TableHead className="font-semibold text-gray-700">Account Ref 1</TableHead>
                            <TableHead className="font-semibold text-gray-700">Debtor Name</TableHead>
                            <TableHead className="font-semibold text-gray-700">Status</TableHead>
                            <TableHead className="font-semibold text-gray-700">Requested</TableHead>
                            <TableHead className="font-semibold text-gray-700">Review Date</TableHead>
                            <TableHead className="font-semibold text-gray-700">Amount</TableHead>
                            <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {workQueueData.map((item, index) => (
                            <TableRow key={index} className="hover:bg-blue-50 transition-colors">
                              <TableCell className="font-medium text-blue-700">{item.id}</TableCell>
                              <TableCell>{item.accountRef}</TableCell>
                              <TableCell className="max-w-xs truncate">{item.debtorName}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-xs bg-orange-100 text-orange-800 border-orange-300">
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{item.requested}</TableCell>
                              <TableCell>{item.reviewDate}</TableCell>
                              <TableCell className="font-medium text-green-600">{item.amount}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-blue-600 hover:bg-blue-100"
                                  onClick={() => setSelectedClient(item)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="file-enquiry" className="mt-0">
              <div className="py-6">
                <Card className="shadow-md">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Search className="h-5 w-5" />
                      Search By File
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      List All Files can only list a maximum of 1000 files. 1000 active files found.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Search Form */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountRef1" className="text-gray-700">Account Ref 1:</Label>
                        <Input id="accountRef1" placeholder="Enter account reference" className="border-purple-200 focus:border-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountRef2" className="text-gray-700">Account Ref 2:</Label>
                        <Input id="accountRef2" placeholder="Enter second reference" className="border-purple-200 focus:border-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="agencyDebt" className="text-gray-700">Agency Debt Reference:</Label>
                        <Input id="agencyDebt" placeholder="Enter agency reference" className="border-purple-200 focus:border-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plaintNumber" className="text-gray-700">Plaint Number:</Label>
                        <Input id="plaintNumber" placeholder="Enter plaint number" className="border-purple-200 focus:border-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="debtorName" className="text-gray-700">Debtor Name:</Label>
                        <Input 
                          id="debtorName" 
                          placeholder="Enter debtor name"
                          className="border-purple-200 focus:border-purple-500"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio" className="text-gray-700">Portfolio:</Label>
                        <Input id="portfolio" placeholder="Enter portfolio" className="border-purple-200 focus:border-purple-500" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="includeClosed" className="rounded text-purple-600" />
                        <label htmlFor="includeClosed" className="text-sm">Include Closed Files</label>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
                      <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">List All Active Files</Button>
                    </div>

                    {/* Search Results */}
                    <div className="border rounded-lg border-purple-200">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-purple-50">
                            <TableHead className="font-semibold text-gray-700">File#</TableHead>
                            <TableHead className="font-semibold text-gray-700">Account Ref 1</TableHead>
                            <TableHead className="font-semibold text-gray-700">A/C Ref 2</TableHead>
                            <TableHead className="font-semibold text-gray-700">Debtor Name</TableHead>
                            <TableHead className="font-semibold text-gray-700">Plaint Num</TableHead>
                            <TableHead className="font-semibold text-gray-700">Amount</TableHead>
                            <TableHead className="font-semibold text-gray-700">Balance</TableHead>
                            <TableHead className="font-semibold text-gray-700">Status</TableHead>
                            <TableHead className="font-semibold text-gray-700">Portfolio</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fileSearchData.map((item, index) => (
                            <TableRow key={index} className="hover:bg-purple-50 cursor-pointer transition-colors"
                              onClick={() => setSelectedClient(item)}>
                              <TableCell className="font-medium text-purple-700">{item.fileNum}</TableCell>
                              <TableCell>{item.accountRef}</TableCell>
                              <TableCell>{item.acRef2}</TableCell>
                              <TableCell className="max-w-xs truncate">{item.debtorName}</TableCell>
                              <TableCell>{item.plaintNum}</TableCell>
                              <TableCell className="text-green-600">{item.amount}</TableCell>
                              <TableCell className="font-medium text-green-600">{item.balance}</TableCell>
                              <TableCell>
                                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">{item.status}</Badge>
                              </TableCell>
                              <TableCell className="text-purple-700">{item.portfolio}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="file-entry" className="mt-0">
              <div className="py-6">
                <Card className="shadow-md">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                    <CardTitle className="text-teal-800">File Entry</CardTitle>
                    <CardDescription className="text-teal-600">Create new debt resolution files</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">File entry functionality would be implemented here.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-0">
              <div className="py-6">
                <Card className="shadow-md">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                    <CardTitle className="text-amber-800">Reports</CardTitle>
                    <CardDescription className="text-amber-600">Generate and view system reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Reports functionality would be implemented here.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <div className="py-6">
                <Card className="shadow-md">
                  <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                    <CardTitle className="text-rose-800">Settings</CardTitle>
                    <CardDescription className="text-rose-600">System configuration and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button 
                        onClick={() => setShowPasswordModal(true)}
                        className="bg-rose-600 hover:bg-rose-700"
                      >
                        Change Password
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </nav>

      {/* Modals */}
      {selectedClient && (
        <ClientDetailModal 
          client={selectedClient} 
          onClose={() => setSelectedClient(null)} 
        />
      )}
      
      <PasswordChangeModal 
        open={showPasswordModal}
        onOpenChange={setShowPasswordModal}
      />
    </div>
  );
};

export default Index;
