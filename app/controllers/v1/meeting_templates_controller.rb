class V1::MeetingTemplatesController < V1::BaseController
  before_action :set_meeting_template, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @meeting_templates = Council.find_by_identifier(params[:identifier]).meeting_templates.order(:name)
    render json: @meeting_templates
  end

  def show
    render json: @meeting_template
  end

  def create
    @meeting_template = MeetingTemplate.new(meeting_template_params)
    @meeting_template.council_id = current_user.council_id

    authorize @meeting_template
    if @meeting_template.save!
      current_user.add_role(:moderator, @meeting_template)
      render json: @meeting_template
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meeting_template
      @meeting_template = MeetingTemplate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def meeting_template_params
      params.require(:meeting_template).permit(:name, :color)
    end
end
