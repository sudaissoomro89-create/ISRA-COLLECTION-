import React, { useState } from 'react';
import { X, Ruler, HelpCircle, CheckCircle } from 'lucide-react';
import { SIZE_CHART } from '../data/products';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [userBust, setUserBust] = useState<string>('');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCalculateSize = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(userBust);
    if (!val || isNaN(val)) return;

    const bustInInches = unit === 'cm' ? val / 2.54 : val;

    if (bustInInches < 36.5) {
      setRecommendedSize('XS (Extra Small)');
    } else if (bustInInches <= 38.5) {
      setRecommendedSize('S (Small)');
    } else if (bustInInches <= 41.5) {
      setRecommendedSize('M (Medium)');
    } else if (bustInInches <= 44.5) {
      setRecommendedSize('L (Large)');
    } else {
      setRecommendedSize('XL (Extra Large)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-stone-800" />
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              ISRA Collection Size Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Unit Toggle & Intro */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-stone-600 max-w-md">
              All our two-piece co-ord sets and kurtis are pre-washed and cut according to contemporary South Asian pret standards.
            </p>
            {/* Functional Segmented Button Control */}
            <div className="inline-flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  unit === 'inches' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Inches (in)
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  unit === 'cm' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Sizing Table */}
          <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100/80 text-stone-800 border-b border-stone-200 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="p-3">Size</th>
                    <th className="p-3">Bust</th>
                    <th className="p-3">Waist</th>
                    <th className="p-3">Hips</th>
                    <th className="p-3">Standard Shirt Length</th>
                    <th className="p-3">Trouser Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono tabular-nums text-stone-700">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.size} className="hover:bg-stone-50/80 transition-colors">
                      <td className="p-3 font-sans font-bold text-stone-900">{row.size}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.bustInches}"` : `${row.bustCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.waistInches}"` : `${row.waistCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.hipInches}"` : `${row.hipCm} cm`}</td>
                      <td className="p-3">{row.kurtiLength}</td>
                      <td className="p-3">{row.trouserLength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive "Find My Size" Helper */}
          <div className="bg-[#faf8f5] p-5 rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-stone-800" />
              <h4 className="font-serif text-sm font-semibold text-stone-900">
                Find Your Recommended Size
              </h4>
            </div>
            <p className="text-xs text-stone-600 mb-3">
              Enter your body bust measurement around the fullest part:
            </p>

            <form onSubmit={handleCalculateSize} className="flex flex-wrap items-center gap-2">
              <input
                type="number"
                step="0.5"
                placeholder={unit === 'inches' ? 'e.g. 38' : 'e.g. 96'}
                value={userBust}
                onChange={(e) => setUserBust(e.target.value)}
                className="w-32 px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900 bg-white font-mono"
              />
              <span className="text-xs text-stone-500 font-medium">{unit}</span>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
              >
                Calculate Fit
              </button>
            </form>

            {recommendedSize && (
              <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  We recommend <strong>{recommendedSize}</strong>. If you like a relaxed, loose drape for summer, consider taking one size up!
                </span>
              </div>
            )}
          </div>

          {/* Measuring Instructions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-200 text-xs text-stone-600">
            <div>
              <strong className="text-stone-900 block mb-1">1. Bust</strong>
              <p>Measure around the fullest part of your chest, keeping tape comfortably horizontal.</p>
            </div>
            <div>
              <strong className="text-stone-900 block mb-1">2. Shirt Length</strong>
              <p>Measured straight from high point of shoulder seam down to bottom hem.</p>
            </div>
            <div>
              <strong className="text-stone-900 block mb-1">3. Trousers</strong>
              <p>Standard relaxed cigarette & culotte cut designed to sit right at the ankle.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
