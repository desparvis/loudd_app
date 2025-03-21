from sqlalchemy import Column, String, JSON, ForeignKey  # Add String import
from sqlalchemy.dialects.postgresql import UUID
from config import Base

class Admin(Base):
    __tablename__ = 'admins'

    id = Column(UUID(as_uuid=True), ForeignKey('users.id'), primary_key=True)
    permissions = Column(JSON)
    created_at = Column(String)
    updated_at = Column(String)