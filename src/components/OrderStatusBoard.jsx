import React, { useState, useEffect } from 'react';
import { Users, Check, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { initialQueue, initialReadyOrders } from './data'; // Importing the data
import audioService from '@/services/audioService';

export default function FullScreenTVPOSQueueManager() {
  const [queue, setQueue] = useState(initialQueue);
  const [nowServing, setNowServing] = useState([]);
  const [readyOrders, setReadyOrders] = useState(initialReadyOrders);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (queue.length > 0) {
        const nextCustomers = queue.slice(0, 3);
        const remainingQueue = queue.slice(3);
        setQueue(remainingQueue);
        setNowServing(nextCustomers);
        if (soundEnabled) {
          audioService.announceNowServing(nextCustomers);
        }
        setTimeout(() => {
          setNowServing([]);
          setReadyOrders(prevOrders => [
            ...nextCustomers.map(customer => ({ 
              ID: customer.ID, 
              name: customer.name, 
              time: 'Just now' 
            })),
            ...prevOrders,
          ]);
        }, 8000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [queue, soundEnabled]);

  const completeOrder = (ID) => {
    setReadyOrders(readyOrders.filter(order => order.ID !== ID));
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 text-xs overflow-hidden">
      <main className="w-1/5 flex flex-col">
        <header className="bg-green-600 text-white">
          <h1 className="text-base font-bold px-1">Ready Orders</h1>
        </header>
        <PerfectScrollbar className="flex-grow">
          <div className="grid grid-cols-1 gap-[2px] bg-gray-200">
            <AnimatePresence>
              {readyOrders.map((order) => (
                <motion.div
                  key={order.ID}
                  className="bg-green-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center p-1">
                    <span className="font-semibold text-green-800">{order.ID}</span>
                    <span className="text-gray-600">{order.time}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => completeOrder(order.ID)}
                      className="text-green-600 hover:text-green-700 hover:bg-green-100 p-0.5"
                    >
                      <Check className="h-3 w-3" />
                      <span className="sr-only">Complete order {order.ID}</span>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </PerfectScrollbar>
      </main>

      <aside className="w-4/5 bg-white border-l border-gray-200 flex flex-col">
        <div className="bg-blue-600 text-white flex justify-between items-center">
          <h2 className="text-base font-semibold flex items-center px-1">
            <Users className="mr-1" size={15} />
            Queue Status
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSound}
            className="text-white hover:bg-blue-700 p-0.5"
          >
            {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </Button>
        </div>
        <div className="bg-green-100 flex flex-col items-start justify-between p-2">
          <span className="font-semibold text-lg">Now Serving:</span>
          <div className="grid grid-cols-3 gap-2 w-full">
            {nowServing.length > 0 ? (
              nowServing.map((customer) => (
                <motion.div
                  key={customer.ID}
                  className="bg-green-50 p-2 border border-green-500 rounded"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="text-lg font-bold text-green-800">{customer.ID}</span>
                </motion.div>
              ))
            ) : (
              <motion.div
                key="no-now-serving"
                className="bg-green-50 p-2 border border-green-500 rounded"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-lg font-bold text-green-800">None</span>
              </motion.div>
            )}
          </div>
        </div>
        <Separator />
        <div className="flex-grow p-2">
          <span className="font-semibold text-lg">Up Next:</span>
          <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-6">
            <AnimatePresence>
              {queue.map((customer, index) => (
                <motion.div
                  key={customer.ID}
                  className="flex items-center justify-between bg-gray-50 p-2 w-full border border-gray-300 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{customer.ID}</span>
                    <span className="text-gray-600">{customer.time}</span>
                  </div>
                  <span className="text-gray-600">{index + 1}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <Separator />
        
      </aside>
    </div>
  );
}
