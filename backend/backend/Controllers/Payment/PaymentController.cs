using backend.Controllers.Base;
using backend.DTOs.Payment;
using backend.Extensions;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Payment
{
    [Route("api/v1/payment/")]
    [Authorize]
    public class PaymentController : BaseApiController
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePayment([FromBody] CreatePaymentDto request)
        {
            var userId = User.GetUserId();
            if (userId == null)
            {
                return Unauthorized("User not authenticated");
            }

            var payment = await _paymentService.CreatePaymentAsync(userId, request);
            return Ok(payment);
        }

        [HttpGet("my-payments")]
        public async Task<IActionResult> GetMyPayments()
        {
            var userId = User.GetUserId();
            if (userId == null)
            {
                return Unauthorized("User not authenticated");
            }

            var payments = await _paymentService.GetUserPaymentsAsync(userId);
            return Ok(payments);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentById(long id)
        {
            var payment = await _paymentService.GetPaymentByIdAsync(id);
            if (payment == null)
            {
                return NotFound("Payment not found");
            }

            return Ok(payment);
        }
    }
}
