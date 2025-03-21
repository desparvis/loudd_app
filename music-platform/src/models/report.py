from sqlalchemy import Column, String, Enum, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from config import Base 

class Report(Base):
    __tablename__ = 'reports'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    admin_id = Column(UUID(as_uuid=True), ForeignKey('admins.id'), nullable=False)
    reported_user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    reason = Column(String, nullable=False)
    status = Column(Enum('pending', 'resolved', 'dismissed', name='report_status'), default='pending')
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    admin = relationship("Admin", back_populates="reports")
    reported_user = relationship("User", back_populates="reports")