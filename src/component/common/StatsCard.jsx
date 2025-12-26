import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 590 },
];

export function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Card className="p-6 bg-white/95 backdrop-blur shadow-xl border-0 rounded-2xl w-64 absolute -left-12 bottom-12 hidden md:block z-20">
        <div className="space-y-1 mb-4">
          <h3 className="text-4xl font-serif font-medium text-foreground">$24M</h3>
          <p className="text-sm text-muted-foreground font-medium">Revenue generated in total</p>
        </div>
        
        <div className="h-24 w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar dataKey="value" fill="#18181b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground font-medium pt-4 border-t border-border/50">
          <span>Spending</span>
          <span>Allocation</span>
          <span>Revenue</span>
        </div>
      </Card>
    </motion.div>
  );
}
