import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Star, Send } from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  rating: z.number().min(1, "Please select a rating").max(5, "Rating cannot exceed 5 stars"),
  projectType: z.string().min(1, "Please specify the project type"),
  review: z.string().min(20, "Review must be at least 20 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to publish your review")
})

type ReviewFormData = z.infer<typeof reviewSchema>

interface AddReviewProps {
  onClose?: () => void
}

export function AddReview({ onClose }: AddReviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const { toast } = useToast()

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      rating: 0,
      projectType: "",
      review: "",
      consent: false,
    },
  })

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Review submitted:", data)
      
      toast({
        title: "Review submitted successfully!",
        description: "Thank you for your feedback. We'll review it and publish it soon.",
      })
      
      form.reset()
      setSelectedRating(0)
      onClose?.()
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating)
    form.setValue("rating", rating)
  }

  const displayRating = hoveredRating || selectedRating

  return (
    <Card className="shadow-xl max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span>Share Your Experience</span>
        </CardTitle>
        <CardDescription>
          Help others by sharing your experience working with AppFinity.net. 
          Your review will be published on our website after review.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Role *</FormLabel>
                    <FormControl>
                      <Input placeholder="CEO, CTO, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Information */}
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Web Development, Mobile App, Cloud Migration, etc." 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    What type of project did we work on together?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Rating */}
            <FormField
              control={form.control}
              name="rating"
              render={() => (
                <FormItem>
                  <FormLabel>Overall Rating *</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-colors duration-200"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= displayRating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-4">
                        {displayRating > 0 && (
                          <>
                            {displayRating} star{displayRating !== 1 ? "s" : ""}
                            {displayRating === 5 && " - Excellent!"}
                            {displayRating === 4 && " - Very Good"}
                            {displayRating === 3 && " - Good"}
                            {displayRating === 2 && " - Fair"}
                            {displayRating === 1 && " - Poor"}
                          </>
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Review Text */}
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your experience working with AppFinity.net. What did you like most? How did we help your business? What results did you achieve?"
                      rows={6}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Minimum 20 characters. Please share specific details about your experience, 
                    the results achieved, and what made our collaboration successful.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Consent */}
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I consent to AppFinity.net publishing this review on their website and marketing materials. 
                      I understand that my name, company, and role will be displayed publicly. *
                    </FormLabel>
                    <FormDescription>
                      Your email address will not be published. We may contact you for clarification 
                      or to request permission for additional use of your testimonial.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              {onClose && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              )}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Review
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
