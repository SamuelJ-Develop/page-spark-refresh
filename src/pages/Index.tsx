import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen bg-black text-gray-200">
      {/* Header */}
      <header className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black shadow-sm">
                a
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">arma</h1>
                <p className="text-sm text-gray-400">debt resolution</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <Bell className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6 bg-gray-700" />
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">Logged in as:</span>
              <span className="font-medium text-white">James Smith</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => setShowPasswordModal(true)}
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-700 shadow-sm">
        <div className="px-6">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent h-12 border-b-0">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-400"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="file-enquiry" 
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-400"
              >
                File Enquiry
              </TabsTrigger>
              <TabsTrigger 
                value="file-entry" 
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-400"
              >
                File Entry
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-400"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:shadow-none rounded-none text-gray-400"
              >
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-0">
              <div className="py-8">
                {/* Welcome Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                  <Card className="lg:col-span-1 border-l-4 border-l-yellow-500 shadow-lg bg-gray-900 border-gray-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-white">Welcome</CardTitle>
                      <CardDescription className="text-gray-400">
                        This is your Home page. To the right you will see a list of files awaiting instructions from you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-sm text-gray-400">
                        To search for a specific file that is not in your work queue, click on File Enquiry and enter a search criteria.
                      </div>
                      
                      <Separator className="bg-gray-700"/>
                      
                      <div>
                        <h4 className="font-medium mb-3 text-white">User Stats</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Your Work Queue:</span>
                            <Badge variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">23 files</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="bg-gray-700"/>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="showActioned" className="rounded border-gray-600 bg-gray-800 text-yellow-500 focus:ring-yellow-400" />
                        <label htmlFor="showActioned" className="text-sm text-gray-300">Show Actioned Files</label>
                      </div>
                      
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                        Refresh Work Queue
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Work Queue */}
                  <Card className="lg:col-span-3 shadow-lg bg-gray-900 border-gray-700">
                    <CardHeader className="bg-gray-800 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <FileText className="h-5 w-5 text-yellow-500" />
                            Work Queue - 23 files
                          </CardTitle>
                          <CardDescription className="text-gray-400">Files in your queue awaiting instructions</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-800 hover:bg-gray-800 border-b-gray-700">
                            <TableHead className="font-semibold text-gray-200">Portfolio</TableHead>
                            <TableHead className="font-semibold text-gray-200">Account Ref 1</TableHead>
                            <TableHead className="font-semibold text-gray-200">Debtor Name</TableHead>
                            <TableHead className="font-semibold text-gray-200">Status</TableHead>
                            <TableHead className="font-semibold text-gray-200">Requested</TableHead>
                            <TableHead className="font-semibold text-gray-200">Review Date</TableHead>
                            <TableHead className="font-semibold text-gray-200">Amount</TableHead>
                            <TableHead className="font-semibold text-gray-200">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {workQueueData.map((item, index) => (
                            <TableRow key={index} className="hover:bg-gray-800 transition-colors border-b-gray-700">
                              <TableCell className="font-medium text-yellow-500">{item.id}</TableCell>
                              <TableCell className="text-gray-300">{item.accountRef}</TableCell>
                              <TableCell className="max-w-xs truncate text-gray-300">{item.debtorName}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-xs bg-amber-900/50 text-amber-300 border-amber-700/50">
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-gray-300">{item.requested}</TableCell>
                              <TableCell className="text-gray-300">{item.reviewDate}</TableCell>
                              <TableCell className="font-medium text-green-400">{item.amount}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-yellow-500 hover:bg-gray-800 hover:text-yellow-400"
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
              <div className="py-8">
                <Card className="shadow-lg bg-gray-900 border-gray-700">
                  <CardHeader className="bg-gray-800 border-b border-gray-700">
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Search className="h-5 w-5 text-yellow-500" />
                      Search By File
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      List All Files can only list a maximum of 1000 files. 1000 active files found.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 p-6">
                    {/* Search Form */}
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="accountRef1" className="text-gray-200 font-medium">Account Ref 1:</Label>
                          <Input id="accountRef1" placeholder="Enter account reference" className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accountRef2" className="text-gray-200 font-medium">Account Ref 2:</Label>
                          <Input id="accountRef2" placeholder="Enter second reference" className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="agencyDebt" className="text-gray-200 font-medium">Agency Debt Reference:</Label>
                          <Input id="agencyDebt" placeholder="Enter agency reference" className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="plaintNumber" className="text-gray-200 font-medium">Plaint Number:</Label>
                          <Input id="plaintNumber" placeholder="Enter plaint number" className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="debtorName" className="text-gray-200 font-medium">Debtor Name:</Label>
                          <Input 
                            id="debtorName" 
                            placeholder="Enter debtor name"
                            className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="portfolio" className="text-gray-200 font-medium">Portfolio:</Label>
                          <Input id="portfolio" placeholder="Enter portfolio" className="bg-gray-900 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="includeClosed" className="rounded border-gray-600 bg-gray-900 text-yellow-500 focus:ring-yellow-500" />
                          <label htmlFor="includeClosed" className="text-sm text-gray-300">Include Closed Files</label>
                        </div>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Search</Button>
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">List All Active Files</Button>
                      </div>
                    </div>

                    {/* Search Results */}
                    <div className="border rounded-lg border-gray-700 bg-gray-900">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-800 hover:bg-gray-800 border-b-gray-700">
                            <TableHead className="font-semibold text-gray-200">File#</TableHead>
                            <TableHead className="font-semibold text-gray-200">Account Ref 1</TableHead>
                            <TableHead className="font-semibold text-gray-200">A/C Ref 2</TableHead>
                            <TableHead className="font-semibold text-gray-200">Debtor Name</TableHead>
                            <TableHead className="font-semibold text-gray-200">Plaint Num</TableHead>
                            <TableHead className="font-semibold text-gray-200">Amount</TableHead>
                            <TableHead className="font-semibold text-gray-200">Balance</TableHead>
                            <TableHead className="font-semibold text-gray-200">Status</TableHead>
                            <TableHead className="font-semibold text-gray-200">Portfolio</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fileSearchData.map((item, index) => (
                            <TableRow key={index} className="hover:bg-gray-800 cursor-pointer transition-colors border-b-gray-700"
                              onClick={() => setSelectedClient(item)}>
                              <TableCell className="font-medium text-yellow-500">{item.fileNum}</TableCell>
                              <TableCell className="text-gray-300">{item.accountRef}</TableCell>
                              <TableCell className="text-gray-300">{item.acRef2}</TableCell>
                              <TableCell className="max-w-xs truncate text-gray-300">{item.debtorName}</TableCell>
                              <TableCell className="text-gray-300">{item.plaintNum}</TableCell>
                              <TableCell className="text-green-400 font-medium">{item.amount}</TableCell>
                              <TableCell className="font-medium text-green-400">{item.balance}</TableCell>
                              <TableCell>
                                <Badge variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">{item.status}</Badge>
                              </TableCell>
                              <TableCell className="text-yellow-500">{item.portfolio}</TableCell>
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
              <div className="py-8">
                <Card className="shadow-lg bg-gray-900 border-gray-700">
                  <CardHeader className="bg-gray-800 border-b border-gray-700">
                    <CardTitle className="text-white">File Entry</CardTitle>
                    <CardDescription className="text-gray-400">Create new debt resolution files</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-400">File entry functionality would be implemented here.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-0">
              <div className="py-8">
                <Card className="shadow-lg bg-gray-900 border-gray-700">
                  <CardHeader className="bg-gray-800 border-b border-gray-700">
                    <CardTitle className="text-white">Reports</CardTitle>
                    <CardDescription className="text-gray-400">Generate and view system reports</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-400">Reports functionality would be implemented here.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <div className="py-8">
                <Card className="shadow-lg bg-gray-900 border-gray-700">
                  <CardHeader className="bg-gray-800 border-b border-gray-700">
                    <CardTitle className="text-white">Settings</CardTitle>
                    <CardDescription className="text-gray-400">System configuration and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button 
                        onClick={() => setShowPasswordModal(true)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
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
