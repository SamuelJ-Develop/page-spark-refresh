
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PasswordChangeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PasswordChangeModal = ({ open, onOpenChange }: PasswordChangeModalProps) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleUpdatePassword = () => {
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Simulate password update
    toast({
      title: "Password Updated",
      description: "Your password has been successfully updated.",
    });

    // Reset form and close modal
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    onOpenChange(false);
  };

  const handleClose = () => {
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
              a
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-gray-900">arma</h1>
            <p className="text-sm text-gray-500">debt resolution</p>
          </div>
          <DialogTitle className="mt-4">Please change your password</DialogTitle>
          <DialogDescription>
            Enter your new password below to update your account security.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password:</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Repeat Password:</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpdatePassword}>
              Update Password
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
