import React, { useState } from 'react';
import { X, CheckCircle, Truck, Building2, Phone, MapPin, User, MessageCircle, Copy, ArrowLeft } from 'lucide-react';
import { CartItem, CustomerOrder } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  shipping,
  total,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Karachi');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank_transfer'>('cod');
  const [confirmedOrder, setConfirmedOrder] = useState<CustomerOrder | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !address) {
      alert('Please fill in your name, contact phone number, and delivery address.');
      return;
    }

    const newOrder: CustomerOrder = {
      orderId: `ISRA-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customerName,
      phone,
      email: email || 'N/A',
      address,
      city,
      notes,
      paymentMethod,
      items: [...items],
      subtotal,
      discount,
      shipping,
      total,
    };

    setConfirmedOrder(newOrder);
    onClearCart();
  };

  const generateWhatsAppConfirmation = (order: CustomerOrder) => {
    const itemList = order.items
      .map((i) => `• ${i.product.title} (${i.selectedSize}) x ${i.quantity} = Rs. ${(i.product.price * i.quantity).toLocaleString()}`)
      .join('\n');

    const msg = `🌟 *NEW ORDER PLACED AT ISRA COLLECTION* 🌟
*Order ID:* ${order.orderId}
*Customer:* ${order.customerName}
*Phone / WhatsApp:* ${order.phone}
*City:* ${order.city}
*Delivery Address:* ${order.address}
*Payment Method:* ${order.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Direct Bank / JazzCash Transfer'}

*Items Ordered:*
${itemList}

*Subtotal:* Rs. ${order.subtotal.toLocaleString()}
*Discount:* -Rs. ${order.discount.toLocaleString()}
*Delivery:* ${order.shipping === 0 ? 'FREE' : `Rs. ${order.shipping}`}
*Total Payable:* Rs. ${order.total.toLocaleString()} PKR

Please confirm dispatch timeline!`;
    return msg;
  };

  const handleCopyReceipt = () => {
    if (!confirmedOrder) return;
    const msg = generateWhatsAppConfirmation(confirmedOrder);
    navigator.clipboard.writeText(msg);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  const handleSendToWhatsApp = () => {
    if (!confirmedOrder) return;
    const msg = generateWhatsAppConfirmation(confirmedOrder);
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              {confirmedOrder ? 'Order Confirmed' : 'Checkout & Delivery Details'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {confirmedOrder ? (
            /* Post-Order State (Confirmed Order View) */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You, {confirmedOrder.customerName}!
                </h4>
                <p className="text-sm text-stone-600 mt-1">
                  Your order <span className="font-mono font-bold text-stone-900">{confirmedOrder.orderId}</span> has been received and is being prepared for dispatch.
                </p>
              </div>

              {/* Order Receipt Card */}
              <div className="text-left bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-3 text-xs">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Order Reference</span>
                  <span className="font-mono font-bold text-stone-900">{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Estimated Delivery</span>
                  <span className="font-medium text-stone-800">2 - 4 Business Days</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Shipping Address</span>
                  <span className="font-medium text-stone-800 text-right max-w-xs">{confirmedOrder.address}, {confirmedOrder.city}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Payment Method</span>
                  <span className="font-medium text-stone-900">
                    {confirmedOrder.paymentMethod === 'cod' ? 'Cash on Delivery (Pay at Doorstep)' : 'Direct Bank / Mobile Wallet'}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-stone-500 block mb-2 font-medium">Items Summary:</span>
                  <div className="space-y-1.5">
                    {confirmedOrder.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-stone-700">
                        <span>{it.product.title} ({it.selectedSize}) × {it.quantity}</span>
                        <span className="font-mono tabular-nums font-semibold">
                          Rs. {(it.product.price * it.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex justify-between font-bold text-stone-900 text-sm">
                  <span>Total Due</span>
                  <span className="font-mono tabular-nums">Rs. {confirmedOrder.total.toLocaleString()} PKR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order Confirmation to WhatsApp (+92 300 1234567)</span>
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handleCopyReceipt}
                    className="flex-1 py-2.5 px-3 border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedReceipt ? 'Receipt Copied!' : 'Copy Order Text'}</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Order Summary Strip */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-stone-500">Total Items: </span>
                  <strong className="text-stone-900 font-mono">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </strong>
                </div>
                <div>
                  <span className="text-stone-500">Payable Total: </span>
                  <strong className="text-base text-stone-900 font-mono tabular-nums">
                    Rs. {total.toLocaleString()} PKR
                  </strong>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Customer & Shipping Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Fatima Zahra"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                      <input
                        type="tel"
                        required
                        placeholder="0300-1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                    >
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Other City">Other City (All Pakistan)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="fatima@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Complete Street Address & Landmark *
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                    <textarea
                      required
                      rows={2}
                      placeholder="House/Apartment #, Street, Block, Area landmark"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Order Instructions / Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Call before delivery, urgent dispatch for weekend"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Select Payment Method:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                      paymentMethod === 'cod'
                        ? 'border-stone-900 bg-stone-50 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-0.5 text-stone-900"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-semibold text-xs text-stone-900">
                        <Truck className="w-3.5 h-3.5" />
                        <span>Cash on Delivery (COD)</span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Pay cash directly to rider at doorstep.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-stone-900 bg-stone-50 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'bank_transfer'}
                      onChange={() => setPaymentMethod('bank_transfer')}
                      className="mt-0.5 text-stone-900"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-semibold text-xs text-stone-900">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Online Bank / JazzCash / EasyPaisa</span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Account details provided on receipt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-stone-200">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Complete Order · Rs. {total.toLocaleString()} PKR</span>
                </button>
                <p className="text-center text-[11px] text-stone-500 mt-2">
                  No hidden fees. 7-Day Doorstep Replacement Guarantee included.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
