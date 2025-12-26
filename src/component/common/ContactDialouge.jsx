// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useCreateContact } from "@/hooks/use-contact";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
// import { Loader2 } from "lucide-react";

// interface ContactDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   type: "growth_plan" | "meeting";
// }

// export function ContactDialog({ open, onOpenChange, type }: ContactDialogProps) {
//   const mutation = useCreateContact();
  
//   const form = useForm<InsertContactRequest>({
//     resolver: zodResolver(insertContactRequestSchema),
//     defaultValues: {
//       type,
//       email: "",
//       message: ""
//     }
//   });

//   const onSubmit = (data: InsertContactRequest) => {
//     mutation.mutate(data, {
//       onSuccess: () => {
//         onOpenChange(false);
//         form.reset();
//       }
//     });
//   };

//   const title = type === "growth_plan" ? "Get Your Growth Plan" : "Schedule a Meeting";
//   const desc = type === "growth_plan" 
//     ? "Enter your details and we'll send you a customized roadmap for your startup."
//     : "Let's chat about your goals. We'll get back to you with available times.";

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
//           <DialogDescription>{desc}</DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input 
//               id="email" 
//               placeholder="you@company.com" 
//               {...form.register("email")}
//             />
//             {form.formState.errors.email && (
//               <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="message">Message (Optional)</Label>
//             <Textarea 
//               id="message" 
//               placeholder="Tell us a bit about your startup..."
//               {...form.register("message")}
//             />
//           </div>

//           <div className="flex justify-end pt-2">
//             <Button type="submit" disabled={mutation.isPending}>
//               {mutation.isPending ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 "Submit Request"
//               )}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
