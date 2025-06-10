"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Edit } from "lucide-react";

const LeaseRevenueCalculator = () => {
  const [leases, setLeases] = useState([
    { name: "1-Bedroom Apartment", price: 1500, vacancies: 2 },
    { name: "2-Bedroom Apartment", price: 2000, vacancies: 1 },
  ]);

  const presetLeases = [
    { name: "Studio Apartment", price: 1200 },
    { name: "1-Bedroom Apartment", price: 1500 },
    { name: "2-Bedroom Apartment", price: 2000 },
    { name: "3-Bedroom Apartment", price: 2500 },
    { name: "Commercial Office Space", price: 3000 },
    { name: "Retail Unit", price: 4000 },
  ];

  const addLease = (leaseName: string, price: number) => {
    setLeases([...leases, { name: leaseName, price, vacancies: 1 }]);
  };

  const removeLease = (index: number) => {
    setLeases(leases.filter((_, i) => i !== index));
  };

  const updateLease = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updated = [...leases];
    updated[index] = { ...updated[index], [field]: value };
    setLeases(updated);
  };

  const calculateTotals = () => {
    const totalLoss = leases.reduce(
      (sum, lease) => sum + lease.price * lease.vacancies,
      0
    );
    const recoveryRate = 0.42; // This can be adjusted based on typical lease recovery
    const totalRecovery = Math.round(totalLoss * recoveryRate);
    return { totalLoss, totalRecovery };
  };

  const { totalLoss, totalRecovery } = calculateTotals();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
              Calculate Your Lease Revenue Recovery
            </h2>
            <p className="text-xl text-gray-200 font-inter">
              See how much revenue you could recover from lease vacancies
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Lease Units
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    <Edit className="w-4 h-4 inline mr-1" />
                    Click on any price or unit type to edit it. Add your most
                    common lease units and their typical monthly vacancy rates.
                  </p>
                </div>

                {/* Current Leases */}
                <div className="space-y-4">
                  {leases.map((lease, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-3 items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="col-span-4">
                        <Input
                          value={lease.name}
                          onChange={(e) =>
                            updateLease(index, "name", e.target.value)
                          }
                          placeholder="Unit type"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={lease.price}
                          onChange={(e) =>
                            updateLease(index, "price", Number(e.target.value))
                          }
                          placeholder="Monthly Rent"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={lease.vacancies}
                          onChange={(e) =>
                            updateLease(
                              index,
                              "vacancies",
                              Number(e.target.value)
                            )
                          }
                          placeholder="Monthly vacancies"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeLease(index)}
                          className="w-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Lease Buttons */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Quick Add Lease Types:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {presetLeases.map((preset, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => addLease(preset.name, preset.price)}
                        className="text-xs justify-start"
                        disabled={leases.some((l) => l.name === preset.name)}
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        {preset.name} (${preset.price})
                      </Button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Tip: After adding a unit type, you can click on the price
                    to customize it for your properties.
                  </p>
                </div>
              </div>

              {/* Results Display */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    Monthly Revenue Impact
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        -${totalLoss.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        Lost to vacancies
                      </div>
                    </div>

                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        +${totalRecovery.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        Potential recovery with ReslotAI
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        ${(totalRecovery * 12).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        Annual recovery potential
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gradient-cta text-white hover:opacity-90 font-semibold">
                    Start Recovering Revenue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseRevenueCalculator;
